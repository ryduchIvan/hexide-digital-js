import {configureStore} from "@reduxjs/toolkit";
import axios from "axios";
//Reducers
import {goodsReducer} from "./features/goods/goods-slice";
import { cartReducer } from "./features/cart/cart-slice";
export const store = configureStore({
	reducer: {
		goods: goodsReducer,
		cart: cartReducer
	},
	devTools: true,
	middleware: (getDefaultMiddlawar) => getDefaultMiddlawar({
		thunk: {
			extraArgument: axios 
		}
	})
})