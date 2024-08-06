import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import ErrorContext from "../../context/errorContext.js";
import styles from "./details.module.css"
import weather_icons from "./icons.js"

import { detailsGet } from "../../utils/api.js";
import onDeleteClick from "./onDeleteClick.js";
import searchPressed from "./weather.js";
import interested from "./visits.js";

const api = {
    key: "FZP48UWCAWRCQ59J8PPXRSUAD",
    base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
};
function Details() {
    const { setError } = useContext(ErrorContext)
    const navigate = useNavigate()
    const { id } = useParams();
    const [data, setData] = useState([])
    const [owner, setIsOwner] = useState(false);
    const [visited, setVisited] = useState(false)
    const [visitsCheked, setVisitsChecked] = useState(false)
    const [loading, setLoading] = useState(true);

    const [date, setDate] = useState("");
    const [weather, setWeather] = useState({});
    const [isWeatherFetched, setIsWeatherFetched] = useState(false);
    const [loadingWeather, setLoadingWeather] = useState(false);
    //TODO check if correct id
    useEffect(() => {
        (async () => {
            try {
                const element = await detailsGet(id)
                if (element == null) {
                    return setError(`Wrong id ??`)
                }
                setData(element)
                setIsOwner(element.owner == sessionStorage.user)
                if (element.visits.some(i => i._id == sessionStorage.user)) { setVisited(true) }
            } catch (err) {
                setError(`Error with fetching data !`)
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        })();
    }, [id, visited]);

    function visitsCheck(e) {
        setVisitsChecked(!visitsCheked)
    }

    return (<>
        <div className={styles.details}>

            <div className={styles.containerDetails}>
                {loading ? (<div className="spinner-container">
                    <ClipLoader color="#123abc" loading={loading} size={400} /></div>)
                    : (

                        <div className={styles.card}>

                            <h1>{data.name}</h1>
                            <img src={data.image} alt="rilski" height="300" width="500px" />
                            <h3>Distance in kilometers: {data.distance}</h3>
                            <h3>Ascend: {data.time}<br />
                                Ascend time is in hours and its for one way only!
                            </h3>
                            {visitsCheked && <p className={styles.visits}>{data.visits.map(e => `${e.username},`)}</p>}
                            <p className={styles.description}>{data.description}</p>
                            {owner ? (<div className={styles.buttonPair}>
                                <Link to={`/edit/${data._id}`}><button>Edit</button> </Link>
                                <button onClick={e => onDeleteClick(e, id, data.owner, { navigate })}>Delete</button>
                            </div>) : sessionStorage.user ? (<div className={styles.buttonPair}>

                                <button className={visited ? styles.disabledLink : ""} onClick={e => interested(e, data.owner, id, setVisited, setData, setIsOwner)}>Interested</button>
                                <button onClick={visitsCheck}>Visits</button>
                            </div>) : ''}
                        </div>
                    )}
            </div>
            <div className={styles.checkWeather}>
                {loadingWeather ? (
                    <div className="spinner-container">
                        <ClipLoader color="#123abc" loading={loadingWeather} size={400} />
                    </div>
                ) : (
                    <>
                        {isWeatherFetched ? (
                            <div className={styles.card}>
                                <div className={styles.weatherIcon}>{weather_icons[weather.days[0].icon] || '❓'}</div>
                                <h1>Weather for {date}</h1>
                                <h2>Max Temperature: {weather.days[0].tempmax}°C</h2>
                                <h2>Min Temperature: {weather.days[0].tempmin}°C</h2>
                                <h2>Sunrise: {weather.days[0].sunrise}</h2>
                                <h2>Sunset: {weather.days[0].sunset}</h2>
                                <h2>Description: {weather.days[0].description || 'No description'} </h2>
                                <div className={styles.buttonPair}>
                                    <button onClick={() => setIsWeatherFetched(false)}>Fix date</button>
                                </div>
                            </div>
                        )
                            : (<form className={styles.centerForm} onSubmit={e => searchPressed(e, data, date, { setWeather }, { setLoadingWeather }, { setIsWeatherFetched }, { setError })}>
                                <h2>Check weather:</h2>
                                <input type="date" id="Test_DatetimeLocal" name="date" onChange={(e) => setDate(e.target.value)} />
                                <button type="submit">Check</button>
                            </form>)}
                    </>
                )}

            </div>
        </div >
    </>)
}
// {weather_icons[weather.days[0].icon] || '❓'}

export default Details