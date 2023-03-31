import React from 'react';
import Navbar from './Navbar';


const Mainpage = () => {
  return (
    <section className="main" id="mainpage">
            <div className="container">
                <Navbar/>
                <div className="main-promo">
                    <div className="main__title">Peones</div>
                    <div className="main__subtitle">Частная коллекция пионов <br/> из Сергиева Посада</div>
                    <button className="button">СМОТРЕТЬ КАТАЛОГ</button>
                </div>
            </div>
        </section>
  )
}

export default Mainpage
