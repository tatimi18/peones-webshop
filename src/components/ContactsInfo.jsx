import React from 'react'
import ListIcons from './ListIcons'

const ContactsInfo = () => {

	return (
		<div className="form-section__contacts">
                    <div className="form-section__contacts-wrapper__changing-bg">
                        <div className="form-section__contacts-wrapper">
                            <div className="form-section__title">Наши контакты:</div>
                            <div className="form-section__subtitle form-section__subtitle__pt42">E-mail:</div>
                            <a href="mailto:peones@peones.ru" className="form-section__info">peones@peones.ru</a>
                            <div className="form-section__subtitle">Номер телефона:</div>
                            <a href="tel:+79036111388" className="form-section__info">+7 (903) 611 - 13 - 88</a>
                            <div className="form-section__subtitle">Адрес компании:</div>
                            <address className="form-section__info form-section__info__pt0">
                                <div className="form-section__adress">Россия, Московская область,</div>
                                <div className="form-section__adress">город Сергиев Посад,</div>
                                <div className="form-section__adress">ул. Академика Силина, д. 1/22</div>
                                </address>
								
                            <ListIcons className={'form-section__icons-wrapper'}/>

                        </div>
                    </div>
                    
                </div>
	)
}

export default ContactsInfo
