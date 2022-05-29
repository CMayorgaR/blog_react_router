import { useState, useEffect } from "react";
import Location from "./Location";

const API_URL = "https://rickandmortyapi.com/api";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/location")
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
  }, []);
  return (
    <>
      <h1 className="text-primary">Lugares</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {locations.map((locations) => (
          <Location
            key={locations.id}
            alt={locations.name}
            name={locations.name}
            type={locations.type}
            dimension={locations.dimension}
          />
        ))}
      </div>
    </>
  )
};

export default Locations;