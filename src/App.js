import './App.css';
//import { render } from "react-dom";
//import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';


const App = () => {
  return <div className="fondo">
    <Navbar />
    <Cards />
    <Footer />
  </div>
}


export default App;
