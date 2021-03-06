//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) => {
    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img src={props.src} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.specie}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.gender}</li>
                <li className="list-group-item">{props.status}</li>
            </ul>
            <div className="card-body d-flex justify-content-between">
                <a href="#" className="card-link">More Info</a>
                <a href="#" className="card-link">LIKE</a>
            </div>
        </div>
       )
};


export default Card;

