import { createSlice } from "@reduxjs/toolkit";
import catalog from '../../data/catalog.json'

const initialState = {
	catalog: catalog,
	selectedSort: 'default',
	currentCategory: 'Коллекция пионов',
	currentColorCategory: 'все цвета',
	filteredCatalogItems: []
};

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {

//==SORT==================

		changeSelectedSort(state, action) {
			state.selectedSort = action.payload
		},

		sortByTitle(state) {
			state.filteredCatalogItems = state.catalog.sort((a, b) => a.name_en.localeCompare(b.name_en))
		},

		sortByPrice(state) {
			state.filteredCatalogItems = state.catalog.sort((a, b) => (a.price.split(' ').join('')) - (b.price.split(' ').join('')))
		},

		reverseSort(state) {
			state.filteredCatalogItems = state.catalog.reverse()
		}, 

//==CATEGORY==================

		changeCurrentCategory(state, action) {
			state.currentCategory = action.payload
		},

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

//==COLOR==================

		changeColorCategory(state, action) {
			state.currentColorCategory = action.payload
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
		},

	},
});

export const { 
	filter_lifeForm, 
	filter_formOfFlower, 
	filter_periodOfFlowering, 
	filter_selection, 
	changeColorCategory,
	filter_color, 
	getDefault,
	changeSelectedSort,
	sortByTitle,
	sortByPrice,
	reverseSort,
	changeCurrentCategory
} = catalogSlice.actions;

export default catalogSlice.reducer;