import React from 'react';
import MyButton from '../UI/MyButton';
import { useSelector } from 'react-redux';
import CatalogCards from './CatalogCards';

const CatalogList = ({filter, currentColorCategory}) => {

	const catalogItems = useSelector(state => state.catalog.catalog)
	const filteredCatalog = useSelector(state => state.catalog.filteredCatalogItems)

	let filteredByColor = [];
	if (currentColorCategory) {
		filteredCatalog.filter((item) =>
			item.color === currentColorCategory)
	}

	let filteredCatalogLength = Array.from(filteredCatalog).length;
	console.log('category ', filteredCatalogLength);
	
	let filteredByColorCatalogLength = filteredByColor.length;
	console.log('color ', filteredByColorCatalogLength);

	return (
		<div className="catalog__list">
			{!filter &&
				!currentColorCategory &&
				<CatalogCards parentToRender={catalogItems}/>
			}

			{filter &&
				!currentColorCategory &&
				<CatalogCards parentToRender={filteredCatalog}/>
			}
			{!filter &&
				currentColorCategory && 
				<CatalogCards parentToRender={filteredCatalog}/>
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
