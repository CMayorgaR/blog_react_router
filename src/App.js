import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //Primero se importa lo siguiente:
import Home from "./views/Home";
import Characters from "./views/Characters";
import Lugares from "./views/Lugares";
import Episodios from "./views/Episodios";

//Creamos el componente principal que es donde van a confluir todas las rutas.
const App = () => {
  return (
    <div>
      <BrowserRouter //es un componente de RRD que nos permite crear la lógica de enrutamiento de c/u de nuestras vistas. Elemento Padre.
      >
        <Navbar />
        <Routes //siempre es un hijo de Browser Router. Es un componente que cumple la función de "switch". Va a contener todas las rutas. Es el componente que "decide" que componentes se verán cuando se acceda a una ruta X.
        >
          <Route //recibe 2 parámetros: path que es la ruta y element que es la vista (expresada como componente de React)
            path="/home"
            element={<Home />} //se pasa directamente el componente declarado en HOME.
          />
          <Route path="/characters" element= {<Characters />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route path="/episodios" element={<Episodios />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
