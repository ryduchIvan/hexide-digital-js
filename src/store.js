import {configureStore} from "@reduxjs/toolkit";
//Reducers
import {goodsReducer} from "./features/goods/goods-slice";
export const store = configureStore({
	reducer: {
		goods: goodsReducer
	},
	devTools: true
})