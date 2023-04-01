import React from 'react'

const About = () => {
	return (
		<div>
			<div className="local-link" id="about"></div>
			<section className="about">
				<div className="container">
					<div className="title">О нас</div>
					<div className="about__wrapper">
						<img src="img/about/about_img.jpg" alt="about" className="about__img"/>
						<div className="about__text">
							<p className="about__p">Друзья, приветствую Вас на своем сайте!</p>
							<p className="about__p">Если Вы читаете эти строки, то, возможно, Вы садовый фанат и ищете что-нибудь интересное для своей новой или старой цветочной клумбы…Ну а если Вы еще и любитель пионов, то нам будет легко с Вами найти общий язык.</p>
							<p className="about__p">Давайте знакомиться! <br/>
								Я, Христина Несмеянова, приветствую Вас на своем сайте Peones.ru, который получил свое названия от слияния двух слов «Peony» и «Nesmeyanova» в одно “Peones”. Как Вы понимаете, пионы – это мое увлечение, и эта страница его логическое продолжение.</p>
							<p className="about__p">По образованию я микробиолог, после окончания университета в начале трудовой деятельности работала в Москве в НИИ Молекулярной Генетики, затем на фармпроизводстве.</p>
							<p className="about__p">После рождения третьей дочери и переезда в новый дом в Сергиевом Посаде передала руководство микробиологической лабораторией и, сменив лабораторные перчатки на садовые, начала новый этап жизни, где обустройство своего сада и создание цветочной коллекции в нем стало не менее интересным занятием, чем валидация микробиологических методов анализа. Я и мои три pдочки-помощницы обожаем пионы и выращиваем их у себя в саду для того, чтобы каждый год в начале лета проводить целый месяц в состоянии переполненного душевного подъема от созерцания невероятной красоты пионового поля в нашем саду. Это ежегодное гарантированное счастье по плану! И в любую погоду! Не говоря уже о том, что послевкусие останется еще и на долгие зимние месяцы, на время составления свежего каталога коллекции с описанием новых сортов.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
