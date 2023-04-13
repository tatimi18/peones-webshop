import React from 'react';
import MyButton from '../UI/MyButton';
import { useSelector } from 'react-redux';

const CatalogList = ({filter, currentColorCategory}) => {

	const catalogItems = useSelector(state => state.catalog.catalog)
	const filteredCatalog = useSelector(state => state.catalog.filteredCatalogItems)

	let filteredByColor;
	if (currentColorCategory) {
		filteredByColor = filteredCatalog.filter((item) =>
			item.color === currentColorCategory)
	}

	return (
		<div className="catalog__list">
			{!filter &&
				!currentColorCategory &&
				Array.from(catalogItems).map(card => 
					<div key={card.name_en} className='catalog__card'>
						<img src={card.main_picture} alt={card.name_en} className='catalog__card catalog__card__img' />
						<div className='catalog__card catalog__card__name__en'>{card.name_en}</div>	
						<div className='catalog__card catalog__card__name__rus'>{card.name_rus}</div>	
						<div className="catalog__card catalog__card__price">{card.price} ₽</div>
						<MyButton children={'В корзину'} addExtraClass={'button__catalog'}/>
					</div>
				)
			}
			{filter &&
				!currentColorCategory &&
				Array.from(filteredCatalog).map(card => 
					<div key={card.name_en} className='catalog__card'>
						<img src={card.main_picture} alt={card.name_en} className='catalog__card catalog__card__img' />
						<div className='catalog__card catalog__card__name__en'>{card.name_en}</div>	
						<div className='catalog__card catalog__card__name__rus'>{card.name_rus}</div>	
						<div className="catalog__card catalog__card__price">{card.price} ₽</div>
						<MyButton children={'В корзину'} addExtraClass={'button__catalog'}/>
					</div>
				)
			}
			{!filter &&
				currentColorCategory &&
				Array.from(filteredByColor).map(card => 
					<div key={card.name_en} className='catalog__card'>
						<img src={card.main_picture} alt={card.name_en} className='catalog__card catalog__card__img' />
						<div className='catalog__card catalog__card__name__en'>{card.name_en}</div>	
						<div className='catalog__card catalog__card__name__rus'>{card.name_rus}</div>	
						<div className="catalog__card catalog__card__price">{card.price} ₽</div>
						<MyButton children={'В корзину'} addExtraClass={'button__catalog'}/>
					</div>
				)
			}
			{filter &&
				currentColorCategory &&
				Array.from(filteredCatalog)
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
			}
		</div>
	)
}

export default CatalogList
