import { Link } from "react-router-dom"
function Card({ hike, scale, width }) {
    return (
        <div className='card'>
            <h3>{hike.name}</h3>
            <div>
                <img src={hike.image} alt="image" height={scale} width={width} />
            </div>
            <Link to={`/details/${hike._id}`}><button>Details</button></Link>
            <p><b>Learn more about {hike.name} </b></p>
        </div>
    )
}
export default Card