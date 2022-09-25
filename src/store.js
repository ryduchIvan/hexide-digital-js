import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import axios from "axios";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//Reducers
import {goodsReducer} from "./features/goods/goods-slice";
import {cartReducer} from "./features/cart/cart-slice";
import {searchReducer} from "./features/search/search-slice";
import {favoriteReducer} from "./features/favorite/favorite-slice";

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const rootReducer = combineReducers({
	goods: goodsReducer,
	cart: cartReducer,
	search: searchReducer,
	favorite: favoriteReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
	middleware: (getDefaultMiddlawar) =>
	 getDefaultMiddlawar({
		thunk: {
			extraArgument: axios 
		},
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		  },
	})
})
