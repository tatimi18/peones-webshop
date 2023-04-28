import React from 'react'
import bagIcon from '../icons/bag_main.svg'
import navbar from '../data/navbar.json'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
	const countOfItemsInCart = useSelector(state => state.shoppingCart.positions)
	return (
		<section className="main" id="mainpage">
			<div className="container-mainNavbar">
				<div className="oneLine">
					<Link to='/'><div className="main__title">Peones</div></Link>
					<nav>
						<div className="container-navbar">
							<ul className="main-parts">
								{navbar.map(item =>
									<li key={item.text} className="main-parts__li"><a href={item.href} className="main-parts__item">{item.text}</a></li>
								)}
							</ul>
						</div>
						<div className="main__burger">
							<div className="main__burger-wrapper">
								<span className="main__burger__item"></span>
								<span className="main__burger__item"></span>
								<span className="main__burger__item"></span>
							</div>
						</div>
					</nav>
					<div className="oneLine-mobile">
						<div className="main-contacts">
							<a href="tel:+79036111388" className="main-contacts__item">+7 (903) 611 - 13 - 88</a>
							<a href="mailto:peones@peones.ru" className="main-contacts__item">peones@peones.ru</a>
						</div>
						<div className="main-cart">
							<Link to='/cart'>
								<div className='main__shopping-cart__wrapper'>
									<img src={bagIcon} alt="bag" className="main-search__item"/>
									{countOfItemsInCart === 0
										? <></>
										: <div className="main__shopping-cart__round">
											{countOfItemsInCart}
										</div>
									}
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Navbar
