import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadGoods = createAsyncThunk(
	"@@goods/load-goods",
	async(_, {rejectWithValue, extra: axios}) =>{
		try {
			const response = await axios.get("https://fakestoreapi.com/products");
			return response;
		} catch (error) {
			return rejectWithValue("Something went wrong. Please reload cite!")
		}
	}
);

const initialState = {
	status:"idle", 
	list: [], 
	error: null
}

const goodsSlice = createSlice({
	name: "@@goods",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) =>{
		builder.addCase(loadGoods.pending, (state) =>{
			state.status = "loading";
			state.error = null
		})
		builder.addCase(loadGoods.rejected, (state, action) =>{
			state.status = "rejected";
			state.error = action.payload;
		})
		builder.addCase(loadGoods.fulfilled, (state, action) =>{
			state.status = "fuilfilled";
			state.list = action.payload.data;
		})
	}
})

//Reducer
export const goodsReducer = goodsSlice.reducer;
//Actions
//Select
export const selectGoods = store => store.goods;
export const filtredGoods = (goods, filter = "") =>{
	return goods.filter(good => good.category.includes(filter))
}