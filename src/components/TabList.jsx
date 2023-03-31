import React, {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import tabs_delivery from '../data/tabs-delivery.json'
import tabs_payment from '../data/tabs-payment.json'


const MyTabs = () => {
	const [activeTab, setActiveTab] = useState('')

	function renderTabContent(tabName) {
		const result = tabName.map(tabItem => 
			<div key={tabItem.altImg} className="tabs-item">
				<div className="tabs-item__wrapper">
					<img src={tabItem.imgSrc} alt={tabItem.altImg} className="tabs-item__img"/>
					<div className="tabs-item__wrapper-descr">
						<div className="tabs-item__title">{tabItem.title}</div>
						<div className="tabs-item__price-mobile">{tabItem.price}</div>
						<div className="tabs-item__text">
							{tabItem.text.map(p => <p key={p} className="tabs-item__p">{p}</p>)}
						</div>
					</div>
					<div className="tabs-item__price">{tabItem.price}</div>
				</div>
			</div>
		)

		return result;
	}

	return (
		<div>
			<div className="local-link" id="delivery-payment"></div>
			<Tabs className="tabs">
				<div className="container">
					<TabList className="tabs__list">
						<Tab className="tabs__item">
							<button 
								className="tabs__btn tabs__btn_active"
								name='Доставка'
							>
								Доставка
							</button>
						</Tab>

						<Tab className="tabs__item">
							<button 
								className="tabs__btn" 
								name='Оплата'
							>
								Оплата
							</button>
						</Tab>
					</TabList>

					<TabPanel className="tabs__content tabs__content_active">
						{renderTabContent(tabs_delivery)}
					</TabPanel>

					<TabPanel className="tabs__content tabs__content_active">
						{renderTabContent(tabs_payment)}
					</TabPanel>
				</div>
			</Tabs> 
		</div>
	)
}

export default MyTabs
