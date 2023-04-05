import React from 'react';
import Navbar from './Navbar';
import MyButton from './UI/MyButton';


const Mainpage = () => {
	return (
		<section className="main" id="mainpage">
			<div className="container">
				<Navbar/>
				<div className="main-promo">
					<div className="main__title">Peones</div>
					<div className="main__subtitle">Частная коллекция пионов <br/> из Сергиева Посада</div>
					<MyButton
						children={'СМОТРЕТЬ КАТАЛОГ'}
					/>
				</div>
			</div>
		</section>
	)
}

export default Mainpage
