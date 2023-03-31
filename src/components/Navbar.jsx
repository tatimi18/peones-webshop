import React from 'react'
import searchIcon from '../icons/search_main.svg'
import bagIcon from '../icons/bag_main.svg'

const Navbar = () => {
  return (
	<div className="oneLine">
		<nav>
			<div className="container-navbar">
				<ul className="main-parts">
					<li className="main-parts__li"><a href="#mainpage" className="main-parts__item">Главная</a></li>
					<li className="main-parts__li"><a href="#catalog" className="main-parts__item">Каталог</a></li>
					<li className="main-parts__li"><a href="#delivery-payment" className="main-parts__item">Доставка и оплата</a></li>
					<li className="main-parts__li"><a href="#photogallery" className="main-parts__item">Фотогалерея</a></li>
					<li className="main-parts__li"><a href="#about" className="main-parts__item">О нас</a></li>
					<li className="main-parts__li"><a href="#contacts" className="main-parts__item">Контакты</a></li>
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
			<div className="main-search">
				<textarea name="nameTextarea" id="" cols="11" rows="1" className="main-search__textarea" placeholder="Поиск"></textarea>
				<a href="/search"><img src={searchIcon} alt="search" className="main-search__item"/></a>
				<a href="/bag"><img src={bagIcon} alt="bag" className="main-search__item"/></a>
			</div>
		</div>
	</div>
  )
}

export default Navbar
