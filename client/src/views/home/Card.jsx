function Card({ hike, scale,width }) {
    return (
        <div className='card'>
            <h3>{hike.name}</h3>
            <img src={hike.image} alt="rilski" height={scale} width={width} />
            <a href={`/details/${hike._id}`}><button>Details</button></a>
            <p><b>Learn more about {hike.name} </b></p>
        </div>
    )
}
export default Card