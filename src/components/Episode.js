const Episode = (props) => {
    return (
      <div className="card text-bg-dark mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">{props.capitulo}</div>
        <div className="card-body" key={props.id}>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.air}</p>
        </div>
      </div>
    );
  };
  
  export default Episode;