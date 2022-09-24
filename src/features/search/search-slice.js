import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "@@search",
	initialState: "",
	reducers: {
		addToSearch: (state, action) =>{
			state = action.payload;
			return state;
		}
	}
})

//Reducer 
export const searchReducer = searchSlice.reducer;
//Actions
export const {addToSearchs} = searchSlice.actions;
//Select
export const selectSearch = store => store.search;