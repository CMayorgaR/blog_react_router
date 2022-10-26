import { Link } from "react-router-dom";
import { Context } from '../store/appContext';
import { useContext } from 'react';

const Navbar = () => {

const {store} = useContext(Context);

const favList = store.favorite;

console.log(favList)

  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <span>
          <Link to="/home" className="navbar-brand"> <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
            alt=""
            style={{ width: "400px", height: "150px" }}
          />
        </Link>
      </span>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/characters" className="nav-link active">
                Personajes
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/lugares" className="nav-link">
                Lugares
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/episodios" className="nav-link">
                Episodios
              </Link>
            </li>
            <div className="justify-content-end">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Favoritos
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >{favList.map((index)=> {
                  return (
                  <li>
                    <a href= "#"
                    className="dropdown-item fst-normal text-primary" 
                    key={index.id}>
                    {index.name}
                    </a>
                  </li>)
                } )} 
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
