import React from 'react'
import { useParams } from 'react-router-dom';
import catalog from '../data/catalog.json'
import MyButton from '../components/UI/MyButton';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/shoppingCartSlice';


const CatalogItemPage = () => {
	Fancybox.bind()
	const params = useParams()
	const catalogfilter = catalog.filter( el => el.name_en === params.name_en)
	const catalogItem = catalogfilter[0]

	const dispatch = useDispatch();

	function addToCartAction(card) {
		dispatch(addToCart(card))
	}

	return (
		<div>
			<div className="container">
				<div className="catalogItem-page__wrapper">
					<div className="catalogItem-page__gallery">
						<div className="catalogItem-page__gallery__wrapper">
							<img data-fancybox src={catalogItem.main_picture} alt={catalogItem.main_picture} className="main_picture"/>
							<div className="catalogItem-page__gallery__wrapper-others">
								{catalogItem.gallery.map(img => 
									<img key={img} data-fancybox src={img} alt={img} className="gallery_others"/>
								)}
							</div>

						</div>
					</div>

					<div className="catalogItem-page__description">
						<div className="title title__catalogItem-page">{params.name_en}</div>
						<div className="catalogItem-page__name_rus">{catalogItem.name_rus}</div>
						<div className="about__p">{catalogItem.description}</div>
						{catalogItem.trophies.length
							? <>
								<div className="about__p">Награды:</div>
								<ul className='catalogItem-page__ul'>
									{catalogItem.trophies.map(item =>
										<li key={item} className='about__p about__p__trophies'>{item}</li>
									)}
								</ul>
							</>
							: <></> 
						}
							
						<div className="catalogItem-page__price">{catalogItem.price} ₽</div>
						<MyButton 
							children={'В корзину'} 
							addExtraClass={'button__catalog button__catalog__item-page'}
							onClick={() => addToCartAction(catalogItem)}
						/>

						<div className="catalogItem-page__subtitle">Характеристики</div>
						<table className='catalogItem-page__table'>

							<tbody>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Сорт
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.name_en} ({catalogItem.name_rus})
									</td>
								</tr>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Селекция
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.selection}
									</td>
								</tr>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Год
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.year}
									</td>
								</tr>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Страна
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.country_description}
									</td>
								</tr>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Жизненная форма
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.life_form_description}
									</td>
								</tr>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Происхождение
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.background}
									</td>
								</tr>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Цвет
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.color_description}
									</td>
								</tr>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Тип цветка
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.type_of_flower_description}
									</td>
								</tr>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Период цветения
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.period_of_flowering_description}
									</td>
								</tr>
								<tr className='catalogItem-page__tr'>
									<td className='catalogItem-page__text'>
										Куст
									</td>
									<td className='catalogItem-page__text'>
										{catalogItem.height}
									</td>
								</tr>

							</tbody>
						</table>
					</div>

				</div>
			</div>
		</div>
	)
}

export default CatalogItemPage
