import React from 'react'
import ListIcons from './ListIcons'
import { Form } from 'semantic-ui-react'

const Footer = () => {
    const instGallery = [
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig1.jpg", alt: "ig1"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig2.jpg", alt: "ig2"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig3.jpg", alt: "ig3"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig4.jpg", alt: "ig4"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig5.jpg", alt: "ig5"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig6.jpg", alt: "ig6"},
    ]

    const navLinks = [
        {href: '#mainpage', name: 'Главная'},
        {href: '#catalog', name: 'Каталог'},
        {href: '#delivery-payment', name: 'Доставка и оплата'},
        {href: '#photogallery', name: 'Фотогалерея'},
        {href: '#about', name: 'О нас'},
        {href: '#contacts', name: 'Контакты'},
    ]
    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="blocks-wrapper">
                    <div className="footer__block">
                        <div className="footer__title">Peones</div>
                        <div className="footer__subtitle">частная коллекция пионов из Сергиева Посада</div>
                        <a href="tel:+79036111388" className="form-section__info">+7 (903) 611 - 13 - 88</a>
                        <a href="mailto:peones@peones.ru" className="form-section__info">peones@peones.ru</a>
                        <ListIcons className={'footer__social'}/>
                    </div>
        
                    <div className="footer__block">
                        <div className="footer__nav-title">Меню навигации:</div>
                        <ul className="footer__ul">
                            {navLinks.map(item =>
                                <li key={item.name} className="footer__links"><a href={item.href} className="footer__link">{item.name}</a></li>
                            )}
                        </ul>
                    </div>
        
                    <div className="footer__block">
                        <div className="footer__nav-title">Instagram</div>
                        <div className="footer__ig-wrapper">
                            {instGallery.map(item => 
                                <a key={item.alt} href={item.href} className="footer__img">
                                    <img src={item.src} alt={item.alt}/>
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="footer__block">
                        {/* <Form>
                            <div class="footer__nav-title mb20px">Подписаться на новости</div>
                            <input type="text" name="name" class="footer__input footer-name" placeholder="Имя" onfocus="if (this.placeholder == 'Имя') {this.placeholder = '';}" onblur="if (this.placeholder == '') {this.placeholder = 'Имя'; this.style.color = '#FFFFFF'}">
                            <input type="email" name="email" class="footer__input footer-email" placeholder="E-mail" onfocus="if (this.placeholder == 'E-mail') {this.placeholder = ''; this.style.color = '#FFFFFF'}" onblur="if (this.placeholder == '') {this.placeholder = 'E-mail'; this.style.color = '#FFFFFF'}">
                            <input type="submit" class="button__footer">Подписаться</input>
                        </Form> */}
                        <Form>
                            <div className="footer__nav-title mb20px">Подписаться на новости</div>

                        </Form>
                    </div>
                </div>
                <div className="footer__line"></div>
            </div>
        </footer>

  )
}

export default Footer
