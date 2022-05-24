const Card = (props) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={props.src} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <p className="card-text">aquí va el nombre del personaje</p>
            </div>
        </div>)
};


export default Card;