import {createSlice} from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: "@@favorite",
	initialState: [],
	reducers: {
		addToFavorite: (state, action) => {
			const id = action.payload.id;
			const itemIndex = state.findIndex(item => item.id === id);
			if (itemIndex < 0) {
				const newItem = {
					...action.payload,
				}
				state.push(newItem);
			} else {
				return state
			}
		},
		removeFromCart: (state, action) => {
			const id = action.payload;
			state.forEach((item, index) => {
				if (item.id === id) {
					return state.splice(index, 1);
				}
			})
		},
	}
});

//Reducer
export const favoriteReducer = favoriteSlice.reducer;
//Actions
export const {addToFavorite, removeFromCart} = favoriteSlice.actions;
//Select
export const selectFavorite = store => store.favorite; 