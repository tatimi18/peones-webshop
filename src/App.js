
import './sass/style.min.css';
import './sass/fonts.min.css'
import Mainpage from './components/Mainpage';
import MyTabs from './components/TabList';
import Gallery from './components/Gallery';
import About from './components/About';


function App() {
	return (
		<div className="App">
			<Mainpage/>
			<MyTabs/>
			<Gallery/>
			<About/>
		</div>
	);
}

export default App;
