const Location = (props) => {
  return (
    <div className="card text-bg-dark mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.type}</div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.dimension}</p>
      </div>
    </div>
  );
};

export default Location;
