import './App.css';
//import { render } from "react-dom";
//import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './views/Navbar';
import Cards from './views/Cards';
import Footer from './views/Footer';


const App = () => {
  return <>
    <Navbar />
    <Cards />
    <Footer />
  </>
}


export default App;
