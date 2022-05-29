import { useState, useEffect } from "react";
import Episode from "./Episode";

const API_URL = "https://rickandmortyapi.com/api";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);
  return (
    <>
      <h1 className="text-primary">Episodios</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {episodes.map((episodes) => (
          <Episode
            key={episodes.id}
            alt={episodes.name}
            name={episodes.name}
            air={episodes.air_date}
            capitulo={episodes.episode}
          />
        ))}
      </div>
    </>
  )
};

export default Episodes;