import React from 'react'
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import MyButton from '../components/UI/MyButton'
import bag_empty_icon from '../icons/bag_empty.svg'
import trash_icon from '../icons/trash.svg'
import {removeFromCart, removePrice} from '../store/slices/shoppingCartSlice.js'


const ShoppingCartPage = () => {
	let keyAcc = 0;
	const dispatch = useDispatch();
	const cartlList = useSelector(state => state.shoppingCart.shoppingCartList)
	const amount = useSelector(state => state.shoppingCart.amount)

	function removeItemAction(itemName, price) {
		console.log(cartlList);
		dispatch(removeFromCart(itemName))
		dispatch(removePrice(Number(price.split(' ').join(''))))
	}

	return (
		<section className='cart'>
			<div className="container">
				<div className="title">Корзина</div>
				<div className="cart__wrapper">
					{cartlList.length === 0
						? <div className='cart__empty__wrapper'>
								<img src={bag_empty_icon} className='cart__icon' alt="empty-bag-icon" />
								<div className="catalog__empty__text">Корзина пока пустая</div>
							</div>
						: <>
							<ol className="cart__ol">

								{cartlList.map(item =>
									<div key={keyAcc++}>
										<li className='cart__item__wrapper'>
											<div className="cart__item__img-and-name__wrapper">
												<img src={item.main_picture} alt={item.name_en} className="cart__item__img" />
												<div className="cart__item__name">{item.name_en}<br></br>({item.name_rus})</div>
											</div>
											<div className="cart__item__price">{item.price} ₽</div>
											<img 
												src={trash_icon} 
												alt={trash_icon} 
												className="cart__item__remove" 
												onClick={() => removeItemAction(item.name_en, item.price)}
											/>
										</li>
										<hr className='cart__item__hr'></hr>
									</div>
								)}
							</ol>
							<div className="cart__total">
								<div className="title">Итог:</div>
								<div className="cart__total__position">Количество товаров: {cartlList.length}</div>
								<div className="cart__total__position">Сумма к оплате: {amount} ₽</div>
								<div className="about__p">Выбор способа доставки, ее оплаты и оплаты товара осуществляется после нажатия кнопки «Оформить заказ»</div>
								<Link className="cart__total__link" to='/#delivery-payment'>Информация о доставке и оплате</Link>
								<MyButton
									children={'Оформить заказ'}
									addExtraClass={'button__catalog button__catalog__item-page'}
								/>
							</div>
						</>
					}

				</div>
			</div>
		</section>
	)
}


// приклеиваем данные из store
const mapStateToProps = store => {
	return {
		shoppingCart: store.shoppingCartList
	}
}
  
// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(ShoppingCartPage)
