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
	error: null,
}

const goodsSlice = createSlice({
	name: "@@goods",
	initialState: initialState,
	reducers: {
		setCurrentGoods: (state, action) =>{
			state.currentGoods = action.payload;
		}
	},
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
export const {setCurrentGoods} = goodsSlice.actions;
//Select
export const selectGoods = store => store.goods;
export const filtredGoods = (goods, filter = "", search) =>{
	return goods.filter(goods => goods.category.slice(0,2).includes(filter.slice(0,2)) && goods.title.toLowerCase().includes(search.toLowerCase()));
}