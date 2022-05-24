import './App.css';
//import { render } from "react-dom";
//import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Navbar from './views/Navbar';
import Cards from './views/Cards';


const App = () => {
  return <>
    <Navbar />
    <Cards />
  </>
}


export default App;
