import React from 'react';
import MyButton from '../UI/MyButton';
import { useSelector } from 'react-redux';
import CatalogCards from './CatalogCards';

const CatalogList = ({currentCategory, currentColorCategory, selectedSort}) => {

	const originalCatalog = useSelector(state => state.catalog.catalog)
	const filteredCatalog = useSelector(state => state.catalog.filteredCatalogItems)

	if (currentColorCategory !== 'все цвета') {
		filteredCatalog.filter((item) =>
			item.color === currentColorCategory
		)
	}

	const filteredFinally = Array.from(filteredCatalog)
		.filter(
		(item => item.color === currentColorCategory))
		.map(card => 
		<div key={card.name_en} className='catalog__card'>
			<img src={card.main_picture} alt={card.name_en} className='catalog__card catalog__card__img' />
			<div className='catalog__card catalog__card__name__en'>{card.name_en}</div>	
			<div className='catalog__card catalog__card__name__rus'>{card.name_rus}</div>	
			<div className="catalog__card catalog__card__price">{card.price} ₽</div>
			<MyButton children={'В корзину'} addExtraClass={'button__catalog'}/>
		</div>)

	return (
		<div className="catalog__list">
			{	
				currentCategory === 'Коллекция пионов' &&
				currentColorCategory === 'все цвета' && 
				selectedSort === 'default' &&
				<CatalogCards parentToRender={originalCatalog}/>
			}

			{
				(currentCategory !== 'Коллекция пионов' ||
				currentColorCategory !== 'все цвета' ||
				selectedSort !== 'default') &&
				<CatalogCards parentToRender={originalCatalog}/>
			}

			{
				currentCategory !== 'Коллекция пионов' &&
				currentColorCategory !== 'все цвета' &&
				selectedSort !== 'default' &&
				filteredFinally
			}

			{
				currentCategory !== 'Коллекция пионов' &&
				currentColorCategory !== 'все цвета' && !filteredFinally.length &&
				<div className='catalog__empty__wrapper'>
					<img src="icons/filter.svg" alt="filter-icon" />
					<div className="catalog__empty__text">Товаров не найдено</div>
				</div>
			}

		</div>
	)
}

export default CatalogList
