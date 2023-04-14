import React from 'react'
import { useSelector } from 'react-redux'

const CatalogCategories = ({currentCategory, categoryChangeHandler}) => {

	const catalogItems = useSelector(state => state.catalog.catalog)

	const lifeForm = new Set();
	const formOfFlower = new Set();
	const periodOfFlowering = new Set();
	const selection = new Set();

	for (let items of catalogItems) {
		lifeForm.add(items.life_form)
		formOfFlower.add(items.type_of_flower)
		periodOfFlowering.add(items.period_of_flowering)
		selection.add(items.country)
	}

	return (
		<>
			<div 
				className={'Коллекция пионов' === currentCategory
					? "catalog__category-all catalog__category-all__active"
					: "catalog__category-all"
				}
				onClick={() => categoryChangeHandler('Коллекция пионов')}
			>
				Коллекция пионов
			</div>

			<div className="catalog__category-name">Жизненная форма</div>
			<ul className="catalog__category-ul">
				{Array.from(lifeForm).map(item => 
					<li key={item} className="catalog__category-li">
						<div
							className={item === currentCategory
								? "catalog__category-link catalog__category-link__active"
								: "catalog__category-link"
							}
							onClick={() => categoryChangeHandler(item)}
						>
							{item}
						</div>
					</li>
				)}
			</ul>

			<div className="catalog__category-name">Форма цветков</div>
			<ul className="catalog__category-ul">
				{Array.from(formOfFlower).map(item => 
					<li key={item} className='catalog__category-li'>
						<div
							className={item === currentCategory
								? "catalog__category-link catalog__category-link__active"
								: "catalog__category-link"
							}
							onClick={() => categoryChangeHandler(item)}
						>
							{item}
						</div>
					</li>
				)}
			</ul>

			<div className="catalog__category-name">Сроки цветения</div>
			<ul className="catalog__category-ul">
				{Array.from(periodOfFlowering).map(item => 
					<li key={item} className='catalog__category-li'>
						<div
							className={item === currentCategory
								? "catalog__category-link catalog__category-link__active"
								: "catalog__category-link"
							}
							onClick={() => categoryChangeHandler(item)}
						>
							{item}
						</div>
					</li>
				)}
			</ul>

			<div className="catalog__category-name">Селекция</div>
			<ul className="catalog__category-ul">
				{Array.from(selection).map(item => 
					<li key={item} className='catalog__category-li'>
						<div
							className={item === currentCategory
								? "catalog__category-link catalog__category-link__active"
								: "catalog__category-link"
							}
							onClick={() => categoryChangeHandler(item)}
						>
							{item}
						</div>
					</li>
				)}
			</ul>
		</>
	)
}

export default CatalogCategories
