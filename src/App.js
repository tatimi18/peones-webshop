
import './sass/style.min.css';
import './sass/fonts.min.css'
import Mainpage from './components/Mainpage';
import MyTabs from './components/TabList';
import Gallery from './components/Gallery';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
	return (
		<div className="App">
			<Mainpage/>
			<MyTabs/>
			<Gallery/>
			<About/>
			<Contacts/>
			<Footer/>
		</div>
	);
}

export default App;
