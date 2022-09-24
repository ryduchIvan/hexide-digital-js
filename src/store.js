import {configureStore} from "@reduxjs/toolkit";
import axios from "axios";
//Reducers
import {goodsReducer} from "./features/goods/goods-slice";
import {cartReducer} from "./features/cart/cart-slice";
import {searchReducer} from "./features/search/search-slice";
export const store = configureStore({
	reducer: {
		goods: goodsReducer,
		cart: cartReducer,
		search: searchReducer
	},
	devTools: true,
	middleware: (getDefaultMiddlawar) => getDefaultMiddlawar({
		thunk: {
			extraArgument: axios 
		}
	})
})