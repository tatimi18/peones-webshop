import React from 'react'
import ContactsInfo from './ContactsInfo'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import ReactInputMask from 'react-input-mask';


const Contacts = () => {

	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset()
		reset({tel: ''})
	  }

	return (
		<section className="form-section" id="contacts">
            <div className="container-form">
                <ContactsInfo/>
                <Form className='main-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-section__title form-section__title__black">Оставьте заявку на обратный звонок:</div>

                    <Form.Group className="form-columns">
                        <div className="form-column">

                            <Form.Field>
                                <label className="form__subtitle__grey">Имя:</label>
                                <input
									required 
									tabIndex="1" 
									{...register("name", { required: true, minLength: 2 })}
									type="text" 
									className="form-main__inputs" 
									placeholder="Введите Ваше имя" 
									onFocus={(e) => {if (e.target.placeholder === 'Введите Ваше имя') {e.target.placeholder = ''}}} 
									onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = 'Введите Ваше имя'}}}
								/>
                            </Form.Field>

							{errors.name && <p className='error'>Имя слишком короткое</p>}

                            <Form.Field>
                                <label className="form__subtitle__grey">Номер телефона:</label>
                                <ReactInputMask 
									required
									mask="+7 (999) 999 - 9999"
									maskChar={null}
									tabIndex="2" 
									{...register("tel", { required: true, minLength: 10 })}
									type="tel" 
									className="form-main__inputs" 
									placeholder="+7 (903) - 28|" 
									onFocus={(e) => {if (e.target.placeholder === '+7 (903) - 28|') {e.target.placeholder = ''}}} 
									onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = '+7 (903) - 28|'}}}
								/>
                            </Form.Field>

							{errors.tel && <p className='error'>Некорректный номер</p>}

                            <Form.Field>
                                <label className="form__subtitle__grey">E-mail:</label>
                                <input 

									tabIndex="3" 
									{...register("email",
									{
										required: true,
										pattern: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
									})}
									id="input_2" 
									type="email" 
									className="form-main__inputs" 
									placeholder="example@mail.ru" 
									onFocus={(e) => {if (e.target.placeholder === 'example@mail.ru') {e.target.placeholder = ''}}} 
									onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = 'example@mail.ru'}}}
								/>
                            </Form.Field>

							{errors.email && <p className='error'>Почта должна содердать @example.ru</p>}
                        </div>

                        <div className="form-column form-column__second">
							<Form.Field>
								<label className="form__subtitle__grey">Сообщение:</label>
								<textarea 
									tabIndex="4" 
									{...register("message")}
									type="text" 
									className="form-main__inputs form-main__inputs__textarea" 
									placeholder="Введите Ваше сообщение" 
									onFocus={(e) => {if (e.target.placeholder === 'Введите Ваше сообщение') {e.target.placeholder = ''}}} 
									onBlur={(e) => {if (e.target.placeholder === '') {e.target.placeholder = 'Введите Ваше сообщение'}}}
								/>

							</Form.Field>
                            <Button 
								type="submit" 
								className="button__form"
							>
								Оставить заявку
							</Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </section>
	)
}

export default Contacts
