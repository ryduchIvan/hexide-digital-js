import {createSlice} from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: "@@favorite",
	initialStat: [],
	reducers: {
		addToFavorite: (state, action) =>{
			state = action.payload;
			return state;
		}
	}
});

//Reducer
export const favoriteReducer = favoriteSlice.reducer;
//Actions
export const {addToFavorite} = favoriteSlice.actions;
//Select
export const selectFavorite = store => store.favorite; 