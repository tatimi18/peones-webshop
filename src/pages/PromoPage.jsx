import React from 'react'
import Mainpage from '../components/Mainpage';
import MyTabs from '../components/TabList';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Catalog from '../components/catalog/Catalog';

const PromoPage = () => {
  return (
	<div>
		<Mainpage/>
	  	<Catalog/>
		<MyTabs/>
		<Gallery/>
		<About/>
		<Contacts/>
		<Footer/>
	</div>
  )
}

export default PromoPage
