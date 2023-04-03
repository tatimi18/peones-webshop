import React from 'react';
import ListIcons from './ListIcons';
import { Button, Form, FormField } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

const Footer = () => {
    const instGallery = [
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig1.jpg", alt: "ig1"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig2.jpg", alt: "ig2"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig3.jpg", alt: "ig3"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig4.jpg", alt: "ig4"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig5.jpg", alt: "ig5"},
        {href: "https://www.instagram.com/peones.ru/", src: "img/footer/ig6.jpg", alt: "ig6"},
    ];

    const navLinks = [
        {href: '#mainpage', name: 'Главная'},
        {href: '#catalog', name: 'Каталог'},
        {href: '#delivery-payment', name: 'Доставка и оплата'},
        {href: '#photogallery', name: 'Фотогалерея'},
        {href: '#about', name: 'О нас'},
        {href: '#contacts', name: 'Контакты'},
    ];

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset()
	}

    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="footer__blocks-wrapper">
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
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <div className="footer__nav-title mb20px">Подписаться на новости</div>
                            
                            <FormField>
                                <input 
                                    type="text" 
                                    {...register("name", { required: true, minLength: 2 })}
                                    className="footer__input footer-name" 
                                    placeholder="Имя"
                                    onFocus={(e) => {if (e.target.placeholder === 'Имя') {e.target.placeholder = ''}}} 
									onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = 'Имя'}}}
                                    />
                            {errors.name && <p className='error-footer'>Имя слишком короткое</p>}
                            </FormField>



                            <FormField>
                                <input 
                                    type="email" 
                                    {...register("email",
									{
										required: true,
										pattern: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
									})}
                                    placeholder="E-mail"
                                    className="footer__input footer-email" 
                                    onFocus={(e) => {if (e.target.placeholder === 'E-mail') {e.target.placeholder = ''}}} 
									onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = 'E-mail'}}}
                                />
                                {errors.email && <p className='error-footer error-footer-last'>Некорректная почта</p>}
                            </FormField>



                            <Button 
								type="submit" 
								className="btn__footer"
							>
								Подписаться
							</Button>

                        </Form>
                    </div>
                </div>
                <div className="footer__line"></div>
            </div>
        </footer>

  )
}

export default Footer
