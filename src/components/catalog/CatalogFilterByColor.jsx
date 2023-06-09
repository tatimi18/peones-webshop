import React from 'react'
import { useSelector } from 'react-redux';

const CatalogFilterByColor = ({currentColorCategory, ColorCategoryChangeHandler}) => {

	const catalogItems = useSelector(state => state.catalog.catalog)

	const color = new Set();

	for (let items of catalogItems) {
		color.add(items.color)
	}

	return (
		<>
			<div className="catalog__category-name">Фильтр по цвету</div>
			
			<div className="catalog__radio">
				<input 
					type="radio" 
					name='color'
					checked={'все цвета' === currentColorCategory
						? true
						: false
					}
					onChange={() => ColorCategoryChangeHandler('все цвета')}
				/>
				<label htmlFor="color">все цвета</label>
			</div>

			{Array.from(color).map(item => 
				<div className='catalog__radio' key={item}>
					<input 
						type="radio" 
						name='color'
						checked={item === currentColorCategory
							? true
							: false
						}
						onChange={() => ColorCategoryChangeHandler(item)}
					/>
					<label htmlFor="color">{item}</label>
				</div>
			)}
		</>
	)
}

export default CatalogFilterByColor
