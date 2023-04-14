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
		filter_lifeForm(state, action) {
			state.filteredCatalogItems = state.catalog.filter(
			  	(item) => item.life_form === action.payload
			);
		},
		
		filter_formOfFlower(state, action) {
			state.filteredCatalogItems = state.catalog.filter(
			  	(item) => item.type_of_flower === action.payload
			);
		},

		filter_periodOfFlowering(state, action) {
			state.filteredCatalogItems = state.catalog.filter(
			  	(item) => item.period_of_flowering === action.payload
			);
		},

		filter_selection(state, action) {
			state.filteredCatalogItems = state.catalog.filter(
			  	(item) => item.country === action.payload
			);
		},

		filter_color(state, action) {
			state.filteredCatalogItems = state.catalog.filter(
				(item) => item.color === action.payload
			)
		},

		getDefault(state, action) {
			state.filteredCatalogItems = state.catalog.filter(
				(item) => item.color !== action.payload
			)
		}
	},
});

export const { filter_lifeForm, filter_formOfFlower, filter_periodOfFlowering, filter_selection, filter_color, getDefault } = catalogSlice.actions;

export default catalogSlice.reducer;