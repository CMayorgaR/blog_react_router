import { useState, useEffect } from "react";
import Card from "./Card";


const API_URL = "https://rickandmortyapi.com/api"

const Cards = () => {

  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/character")
      .then(res => res.json())
      .then(data => setPersonaje(data.results))
  }, []);
  return (
    <>
    <h1 className="text-primary">Personajes</h1>
    <div className= "d-flex justify-content-between">
      {personaje.map(personaje => <Card src={personaje.image} alt={personaje.name} key={personaje.id} />)}
    </div>
    </>
  )
};

export default Cards;