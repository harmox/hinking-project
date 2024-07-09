function Card({ hike }) {
    console.log(hike)
    return (
        <div className='card' key={hike._id}>
            <h3>{hike.name}</h3>
            <img src={hike.image} alt="rilski" height="300" />
            <a href={`/details/${hike._id}`}><button>Details</button></a>
            <p><b>Learn more about {hike.name} </b></p>
        </div>
    )
}
export default Card