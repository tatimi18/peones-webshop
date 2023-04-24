import React from 'react'
import searchIcon from '../icons/search_main.svg'
import bagIcon from '../icons/bag_main.svg'
import navbar from '../data/navbar.json'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
	<div className="oneLine">
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
			<div className="main-search">
				<textarea name="nameTextarea" id="" cols="11" rows="1" className="main-search__textarea" placeholder="Поиск"></textarea>
				<a href="/search"><img src={searchIcon} alt="search" className="main-search__item"/></a>
				<Link to='/cart'><img src={bagIcon} alt="bag" className="main-search__item"/></Link>
			</div>
		</div>
	</div>
  )
}

export default Navbar
