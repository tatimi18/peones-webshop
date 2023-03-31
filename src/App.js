
import './sass/style.min.css';
import './sass/fonts.min.css'
import Mainpage from './components/Mainpage';
import MyTabs from './components/TabList';


function App() {
  return (
    <div className="App">
      <Mainpage/>
      <MyTabs/>
    </div>
  );
}

export default App;
