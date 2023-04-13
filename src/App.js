
import './sass/style.min.css';
import './sass/fonts.min.css'
import Mainpage from './components/Mainpage';
import MyTabs from './components/TabList';
import Gallery from './components/Gallery';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Catalog from './components/catalog/Catalog';

function App() {
	return (
		<div className="App">
			<Mainpage/>
			<Catalog/>
			<MyTabs/>
			<Gallery/>
			<About/>
			<Contacts/>
			<Footer/>
		</div>
	);
}

export default App;
