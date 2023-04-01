import React from 'react'
import iconsContacts from '../data/contacts-icons.json'

const ContactsInfo = () => {

	const ListIcons = iconsContacts.map(item => 
		<div key={item.href} className="form__icon-border">
			<a href={item.href} className="form__link">
				<img src={item.srcImg} alt={item.altImg} className="form__icon"/>
			</a>
		</div>)

	return (
		<div className="form__contacts">
                    <div className="form__contacts-wrapper__changing-bg">
                        <div className="form__contacts-wrapper">
                            <div className="form__title">Наши контакты:</div>
                            <div className="form__subtitle form__subtitle__pt42">E-mail:</div>
                            <a href="mailto:peones@peones.ru" className="form__info">peones@peones.ru</a>
                            <div className="form__subtitle">Номер телефона:</div>
                            <a href="tel:+79036111388" className="form__info">+7 (903) 611 - 13 - 88</a>
                            <div className="form__subtitle">Адрес компании:</div>
                            <address className="form__info form__info__pt0">
                                <div className="form__adress">Россия, Московская область,</div>
                                <div className="form__adress">город Сергиев Посад,</div>
                                <div className="form__adress">ул. Академика Силина, д. 1/22</div>
                                </address>
								
                            <div className="form__icons-wrapper">
                                {ListIcons}
                            </div>
                        </div>
                    </div>
                    
                </div>
	)
}

export default ContactsInfo
