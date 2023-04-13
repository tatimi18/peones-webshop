import { createSlice } from "@reduxjs/toolkit";
import catalog from '../../data/catalog.json'

const initialState = {
	catalog: catalog,
	filteredCatalogItems: []
};

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		filterCatalog(state, action) {
			state.filteredCatalogItems = state.catalog.filter(
			  	(item) => item.life_form === action.payload
			);
		},
	},
});

export const { filterCatalog } = catalogSlice.actions;

export default catalogSlice.reducer;