import './App.css';
//import { render } from "react-dom";
//import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './views/Navbar';
import Cards from './views/Cards';
import Footer from './views/Footer';


const App = () => {
  return <div className="fondo">
    <Navbar />
    <Cards />
    <Footer />
  </div>
}


export default App;
