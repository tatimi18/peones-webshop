import React from 'react'
import MyButton from '../UI/MyButton'

const CatalogCards = ({parentToRender}) => {
	return (
		<>
			{Array.from(parentToRender).map(card => 
				<div key={card.name_en} className='catalog__card'>
					<img src={card.main_picture} alt={card.name_en} className='catalog__card catalog__card__img' />
					<div className='catalog__card catalog__card__name__en'>{card.name_en}</div>	
					<div className='catalog__card catalog__card__name__rus'>{card.name_rus}</div>	
					<div className="catalog__card catalog__card__price">{card.price} ₽</div>
					<MyButton children={'В корзину'} addExtraClass={'button__catalog'}/>
				</div>
			)}
		</>
	)
}

export default CatalogCards
