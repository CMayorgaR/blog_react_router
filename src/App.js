import './App.css';
//import { render } from "react-dom";
//import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Locations from './components/Locations';
import Episodes from './components/Episodes';
import Footer from './components/Footer';



const App = () => {
  return <div className="fondo">
    <Navbar />
    <Cards />
    <Locations />
    <Episodes />
    <Footer />
  </div>
}


export default App;
