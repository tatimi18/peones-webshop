
import './sass/style.min.css';
import './sass/fonts.min.css'
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import Navbar from './components/Navbar'

function App() {
	return (
		<BrowserRouter>
			<Navbar/>
			<AppRouter/>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
