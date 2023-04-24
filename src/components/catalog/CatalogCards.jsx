import React from 'react'
import MyButton from '../UI/MyButton'
import { useNavigate } from "react-router-dom";

const CatalogCards = ({parentToRender}) => {
	const router = useNavigate();
	return (
		<>
			{Array.from(parentToRender).map(card => 
				<div key={card.name_en} className='catalog__card'>
					<img 
						src={card.main_picture} 
						alt={card.name_en} 
						className='catalog__card catalog__card__img' 
						onClick={() => router(`/${card.name_en}`)}
					/>
					<div 
						className='catalog__card catalog__card__name__en'
						onClick={() => router(`/${card.name_en}`)}
					>
						{card.name_en}
					</div>
	
					<div className='catalog__card catalog__card__name__rus'>{card.name_rus}</div>	
					<div className="catalog__card catalog__card__price">{card.price} ₽</div>
					<MyButton 
						children={'В корзину'} 
						addExtraClass={'button__catalog'}
						
					/>
				</div>
			)}
		</>
	)
}

export default CatalogCards
