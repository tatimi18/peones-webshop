import React from 'react'
import { useSelector } from 'react-redux';

const CatalogFilterByColor = ({categoryTitle, categorySet}) => {

	const catalogItems = useSelector(state => state.catalog.catalog)

	const color = new Set();

	for (let items of catalogItems) {
		color.add(items.color)
	}

	return (
		<>
			<div className="catalog__category-name">Фильтр по цвету</div>
								
			<input 
				type="radio" 
				name='all'
			/>
			<label htmlFor="all">все цвета</label>
			{Array.from(color).map(item => 
				<div key={item}>
					<input 
						type="radio" 
						name={item}
					/>
				<label htmlFor="color">{item}</label>
				</div>
			)}
		</>
	)
}

export default CatalogFilterByColor
