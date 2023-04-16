import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import CatalogCategories from './CatalogCategories';
import CatalogList from './CatalogList';
import { 
	filter_lifeForm, 
	filter_formOfFlower, 
	filter_periodOfFlowering, 
	filter_selection, 
	filter_color, 
	getDefault, 
	changeSelectedSort, 
	sortByTitle, 
	sortByPrice,
	reverseSort
} from '../../store/slices/catalogSlice';
import CatalogFilterByColor from './CatalogFilterByColor';
import MySelect from '../UI/MySelect';

const Catalog = () => {
	const [filterByCategory, setFilterByCategory] = useState(false);
	const [currentCategory, setCurrentCategory] = useState('Коллекция пионов');
	const [currentColorCategory, setCurrentColorCategory] = useState('все цвета');

	const dispatch = useDispatch();

	const selectedSort = useSelector(state => state.catalog.selectedSort)
	

	const categoryChangeHandler = (category) => {
		setCurrentCategory(category);

		if (category === 'Коллекция пионов') {
			dispatch(getDefault())
		}

		if (category === 'Травянистые' || category === 'Ито-гибриды') {
			dispatch(filter_lifeForm(category));
		}
		
		if (category === 'Махровые' || category === 'Полумахровые' || category === 'Простые' || category === 'Японские') {
			dispatch(filter_formOfFlower(category));
		}

		if (category === 'Средний' || category === 'Ранний') {
			dispatch(filter_periodOfFlowering(category));
		}

		if (category === 'США' || category === 'СССР' || category === 'Япония' || category === 'Франция') {
			dispatch(filter_selection(category));
		}
		setFilterByCategory(true);
	};

	const colorCategoryChangeHandler = (color) => {
		if (!currentCategory) {
			dispatch(filter_color(color))
		}
		setCurrentColorCategory(color);
	};

	function selectedSortHandler(sort) {
		dispatch(changeSelectedSort(sort))

		if (sort.includes('title')) {
			dispatch(sortByTitle())
		}

		if (sort.includes('price')) {
			dispatch(sortByPrice())
		}

		if (sort.includes('DOWN')) {
			dispatch(reverseSort())
		}
		
	}

	return (
		<div>
			<div className="local-link" id="catalog"></div>
			<section className='catalog'>
				<div className="container">
					<div className="title title__catalog">Каталог</div>
					<div className="catalog__wrapper">
						<div className="catalog__sidebar">
							
							<div className="catalog__categories">

								<MySelect
									options={[
										{value: 'default', data: '', name: 'по умолчанию'},
										{value: 'title-UP', data: 'name_en', name: 'название ↑'},
										{value: 'title-DOWN', data: 'name_en', name: 'название ↓'}, 
										{value: 'price-UP', data: 'price', name: 'цена ↑'},
										{value: 'price-DOWN', data: 'price', name: 'цена ↓'},
									]}
									value={selectedSort}
									onChange={selectedSortHandler}
								/>
								<CatalogCategories 
									currentCategory={currentCategory}
									categoryChangeHandler={categoryChangeHandler}
								/>
								<CatalogFilterByColor
									currentColorCategory={currentColorCategory}
									ColorCategoryChangeHandler={colorCategoryChangeHandler}
								/>
							</div>
						</div>

						<CatalogList 
							filter={filterByCategory}
							currentColorCategory={currentColorCategory}
							selectedSort={selectedSort}
						/>
					</div>
				</div>

			</section>
		</div>
	)
}

// приклеиваем данные из store
const mapStateToProps = store => {
	return {
		catalog: store.filteredCatalogItems
	}
}
  
// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(Catalog)
