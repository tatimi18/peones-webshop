import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import CatalogCategory from './CatalogCategory';
import CatalogList from './CatalogList';
import { filterCatalog } from '../../store/slices/catalogSlice';

const Catalog = () => {
	const [filterByCategory, setFilterByCategory] = useState(false);
	const [currentCategory, setCurrentCategory] = useState('');

	const dispatch = useDispatch();

	const categoryChangeHandler = (category) => {
		setCurrentCategory(category);
		dispatch(filterCatalog(category));
		setFilterByCategory(true);
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
								<CatalogCategory 
									currentCategory={currentCategory}
									categoryChangeHandler={categoryChangeHandler}
								/>
{/* 								<CatalogFilterByColor/> */}
							</div>
						</div>

						<CatalogList 
							filter={filterByCategory}
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
