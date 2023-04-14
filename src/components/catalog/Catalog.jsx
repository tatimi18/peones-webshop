import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import CatalogCategories from './CatalogCategories';
import CatalogList from './CatalogList';
import { filter_lifeForm, filter_formOfFlower, filter_periodOfFlowering, filter_selection, filter_color, getDefault } from '../../store/slices/catalogSlice';
import CatalogFilterByColor from './CatalogFilterByColor';

const Catalog = () => {
	const [filterByCategory, setFilterByCategory] = useState(false);
	const [currentCategory, setCurrentCategory] = useState('');
	const [currentColorCategory, setCurrentColorCategory] = useState('')

	const dispatch = useDispatch();

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

	const ColorCategoryChangeHandler = (color) => {
		/* if (color === 'все цвета') {
			console.log('выводить исходный каталог');
		} */

		if (!currentCategory) {
			dispatch(filter_color(color))
		}
		setCurrentColorCategory(color);
	};

	return (
		<div>
			<div className="local-link" id="catalog"></div>
			<section className='catalog'>
				<div className="container">
					<div className="title title__catalog">Каталог</div>
					<div className="catalog__wrapper">
						<div className="catalog__sidebar">
							
							<div className="catalog__categories">
								<CatalogCategories 
									currentCategory={currentCategory}
									categoryChangeHandler={categoryChangeHandler}
								/>
								<CatalogFilterByColor
									currentColorCategory={currentColorCategory}
									ColorCategoryChangeHandler={ColorCategoryChangeHandler}
								/>
							</div>
						</div>

						<CatalogList 
							filter={filterByCategory}
							currentColorCategory={currentColorCategory}
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
