import React, { useState } from 'react'
import ContactsInfo from './ContactsInfo'

const Contacts = () => {

	const [name, setName] = useState('')
	const [tel, setTel] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	function postForm(e) {
		e.preventDefault()
		if (!name) {
			console.log('put name');
			console.log(e.target);
		}
	}

	return (
		<section className="form" id="contacts">
            <div className="container-form">
                <ContactsInfo/>
                <form name="main" id="mainform" className="form-main">
                    <div className="form__title form__title__black">Оставьте заявку на обратный звонок:</div>

                    <div className="form-columns">
                        <div className="form-column">

                            <div className="form-main__item">
                                <label htmlFor="input_1" className="form__subtitle form__subtitle__grey">Имя:</label>
                                <input
									required 
									tabIndex="1" 
									value={name}
									onChange={e => setName(e.target.value)} 
									type="text" 
									className="form-main__inputs" 
									placeholder="Введите Ваше имя" 
									onFocus={(e) => {if (e.target.placeholder === 'Введите Ваше имя') {e.target.placeholder = ''}}} 
									onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = 'Введите Ваше имя'}}}
								/>
                            </div>

                            <div className="form-main__item">
                                <label htmlFor="input_2" className="form__subtitle form__subtitle__grey">Номер телефона:</label>
                                <input 
									required
									tabIndex="2" 
									value={tel}
									onChange={e => setTel(e.target.value)} 
									type="tel" 
									className="form-main__inputs" 
									placeholder="+7 (903) - 28|" 
									onFocus={(e) => {if (e.target.placeholder === '+7 (903) - 28|') {e.target.placeholder = ''}}} 
									onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = '+7 (903) - 28|'}}}
								/>
                            </div>

                            <div className="form-main__item">
                                <label htmlFor="input_3" className="form__subtitle form__subtitle__grey">E-mail:</label>
                                <input 
									required
									tabIndex="3" 
									value={email}
									onChange={e => setEmail(e.target.value)} 
									id="input_2" 
									type="email" 
									className="form-main__inputs" 
									placeholder="example@mail.ru" 
									onFocus={(e) => {if (e.target.placeholder === 'example@mail.ru') {e.target.placeholder = ''}}} 
									onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = 'example@mail.ru'}}}
								/>
                            </div>

                        </div>

                        <div className="form-column form-column__second">
							<label htmlFor="textarea_4" className="form__subtitle form__subtitle__grey">Сообщение:</label>
							<textarea 
								tabIndex="4" 
								value={message}
								onChange={e => setMessage(e.target.value)} 
								type="text" 
								className="form-main__inputs form-main__inputs__textarea" 
								placeholder="Введите Ваше сообщение" 
								onFocus={(e) => {if (e.target.placeholder === 'Введите Ваше сообщение') {e.target.placeholder = ''}}} 
								onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = 'Введите Ваше сообщение'}}}
							/>
                            <button 
								type="submit" 
								className="button button__form"
								onClick={(e) => postForm(e)}
							>
								Оставить заявку
							</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
	)
}

export default Contacts
