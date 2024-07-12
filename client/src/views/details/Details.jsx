import { useState, useEffect } from "react";
import styles from "./details.module.css"
import { useParams } from 'react-router-dom';
import weather_icons from "./icons.js"
import { details } from "../../utils/api.js";
import { ClipLoader } from 'react-spinners';

const api = {
    key: "FZP48UWCAWRCQ59J8PPXRSUAD",
    base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
};
function Details({ setError }) {
    let { id } = useParams();
    const [data, setData] = useState([])
    const [owner, setIsOwner] = useState(false);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState("");
    const [weather, setWeather] = useState({});
    const [isWeatherFetched, setIsWeatherFetched] = useState(false);
    const [loadingWeather, setLoadingWeather] = useState(false);
    useEffect(() => {
        (async function Gal() {
            try {
                const toShow = await details(id)
                const element = await toShow.json()
                setData(element)
                setIsOwner(element.owner == localStorage.user)
            } catch (err) {
                setError(`Error with fetching data ${err.message}`)
            } finally {
                setLoading(false)
            }
        })();
    }, []);
    console.log(weather)

    async function searchPressed(e) {
        e.preventDefault()
        setLoadingWeather(true)
        if (!date) { return }
        try {
            const res = await fetch(`${api.base}${data.longitude},${data.latitude}/${date}?iconSet=icons1&&unitGroup=metric&include=days&key=${api.key}&contentType=json`);
            const result = await res.json();
            setWeather(result);
            setIsWeatherFetched(true);
        } catch (err) {
            setError(`Error with fetching data ${err.message}`)
        } finally {
            setLoadingWeather(false)

        }
    }
    //TODO check if owner 
    return (<>
        <div className={styles.details}>

            <div className={styles.containerDetails}>
                {loading ? (<div className="spinner-container">
                    <ClipLoader color="#123abc" loading={loading} size={400} /></div>)
                    : (

                        <div className={styles.card}>

                            <h1>{data.name}</h1>
                            <img src={data.image} alt="rilski" height="300" />
                            <h3>Distance in kilometers: {data.distance}</h3>
                            <h3>Ascend: {data.time}<br />
                                Ascend time is in hours and its for one way only!
                            </h3>
                            <p className={styles.description}>{data.description}</p>
                            {owner ? (<div className={styles.buttonPair}>
                                <button >Interested</button>
                                <button >Visits</button>
                            </div>) : (<div className={styles.buttonPair}>
                                <button >Edit</button>
                                <button >Delete</button>
                            </div>)}
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
                            : (<form className={styles.centerForm} onSubmit={searchPressed}>
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