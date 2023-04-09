import React from 'react'
import catalog from '../data/catalog.json';
import MyButton from './UI/MyButton';

const Catalog = () => {

	const lifeForm = new Set();
	const formOfFlower = new Set();
	const periodOfFlowering = new Set();
	const height = new Set();
	const selection = new Set();
	const color = new Set();

	for (let items of catalog) {
		lifeForm.add(items.life_form)
		formOfFlower.add(items.type_of_flower)
		periodOfFlowering.add(items.period_of_flowering)
		height.add(items.height)
		selection.add(items.country)
		color.add(items.color)
	}

	return (
		<div>
			<div className="local-link" id="catalog"></div>
			<section className='catalog'>
				<div className="container">
					<div className="title title__catalog">Каталог</div>
					<div className="catalog__wrapper">
						<div className="catalog__sidebar">
							
							<div className="catalog__categories">
								<div className="catalog__category-name">Жизненная форма</div>
								<ul className="catalog__category-ul">
									{Array.from(lifeForm).map(item => 
										<li key={item} className='catalog__category-li'>
											<a href="/" className="catalog__category-link">{item}</a>
										</li>
									)}
								</ul>

								<div className="catalog__category-name">Форма цветков</div>
								<ul className="catalog__category-ul">
									{Array.from(formOfFlower).map(item => 
										<li key={item} className='catalog__category-li'>
											<a href="/" className="catalog__category-link">{item}</a>
										</li>
									)}
								</ul>

								<div className="catalog__category-name">Сроки цветения</div>
								<ul className="catalog__category-ul">
									{Array.from(periodOfFlowering).map(item => 
										<li key={item} className='catalog__category-li'>
											<a href="/" className="catalog__category-link">{item}</a>
										</li>
									)}
								</ul>

								<div className="catalog__category-name">Высота куста</div>
								<ul className="catalog__category-ul">
									<li className='catalog__category-li'>
										<a href="/" className="catalog__category-link">Низкие (меньше 60 см)</a>
									</li>
									<li className='catalog__category-li'>
										<a href="/" className="catalog__category-link">Средние (60-90 см)</a>
									</li>
									<li className='catalog__category-li'>
										<a href="/" className="catalog__category-link">Высокие (больше 90 см)</a>
									</li>
								</ul>
									
								<div className="catalog__category-name">Селекция</div>
								<ul className="catalog__category-ul">
									{Array.from(selection).map(item => 
										<li key={item} className='catalog__category-li'>
											<a href="/" className="catalog__category-link">{item}</a>
										</li>
									)}
								</ul>

								<div className="catalog__category-name">Фильтр по цвету</div>
								
								{Array.from(color).map(item => 
									<div key={item}>
										<input 
											type="checkbox" name='color'
										/>
									<label htmlFor="color">{item}</label>
									</div>
								)}
			
							</div>

						</div>

						<div className="catalog__list">
							{catalog.map(card => 
								<div key={card.name_en} className='catalog__card'>
									<img src={card.main_picture} alt={card.name_en} className='catalog__card catalog__card__img' />
									<div className='catalog__card catalog__card__name__en'>{card.name_en}</div>	
									<div className='catalog__card catalog__card__name__rus'>{card.name_rus}</div>	
									<div className="catalog__card catalog__card__price">{card.price} ₽</div>
									<MyButton children={'В корзину'} addExtraClass={'button__catalog'}/>
								</div>
							)}
						</div>
					</div>
				</div>

			</section>
		</div>
	)
}

export default Catalog
