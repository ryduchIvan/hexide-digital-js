import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadGoods = createAsyncThunk(
	"@@goods/load-goods",
	async() =>{
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		return data;
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
			state.status = "loading";
			state.list = action.payload;
		})
	}
})

//Reducer
export const goodsReducer = goodsSlice.reducer;
//Actions
//Select
export const selectGoods = store => store.goods;