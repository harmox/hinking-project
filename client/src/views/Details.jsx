import { useState, useEffect } from "react";
import styles from "../details.module.css"
import { useParams } from 'react-router-dom';
import { details } from "../utils/api.js";
import weather_icons from "./icons.js"

const api = {
    key: "FZP48UWCAWRCQ59J8PPXRSUAD",
    base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
};
//TODO use and get from   open-meteo
function Details() {
    let { id } = useParams();
    const [data, setData] = useState([])
    const [date, setDate] = useState("");
    const [weather, setWeather] = useState({});
    const [owner, setIsOwner] = useState({});
    const [isWeatherFetched, setIsWeatherFetched] = useState(false);
    useEffect(() => {
        (async function Gal() {
            try {
                const toShow = await details(id)
                const element = await toShow.json()
                setData(element)
                setIsOwner(element.owner == localStorage.user)
            } catch (err) {
                console.log(err)
            }
        })();
    }, []);
    console.log(weather)

    async function searchPressed(e) {
        e.preventDefault()
        if (!date) { return }
        try {
            const res = await fetch(`${api.base}${data.longitude},${data.latitude}/${date}?iconSet=icons1&&unitGroup=metric&include=days&key=${api.key}&contentType=json`);
            const result = await res.json();
            setWeather(result);
            setIsWeatherFetched(true);
        } catch (err) {
            console.log(err);
        }
    }
    //TODO check if owner 
    return (<>
        <div className={styles.details}>

            <div className={styles.containerDetails}>
                <div className={styles.card}>

                    <h1>{data.name}</h1>
                    <img src={data.image} alt="rilski" height="300" />
                    <h3>Distance in kilometers: {data.distance}</h3>
                    <h3>Ascend: {data.time}<br />
                        Ascend time is in hours and its for one way only!
                    </h3>
                    <p className={styles.description}>{data.description}</p>
                    {owner ? (<div className={styles.buttonPair}>
                        <button type="submit">Interested</button>
                        <button type="submit">Visits</button>
                    </div>) : (<div className={styles.buttonPair}>
                        <button type="submit">Edit</button>
                        <button type="submit">Delete</button>
                    </div>)}
                </div>
            </div>
            <div className={styles.checkWeather}>
                <form className={styles.centerForm} onSubmit={searchPressed} >
                    <h4 >Check weather:</h4>
                    <input type="date"
                        id="Test_DatetimeLocal" name="date" onChange={(e) => setDate(e.target.value)} />
                    <button type="submit">check</button>
                </form>
                {isWeatherFetched &&
                    <div className={styles.weatherResult}>
                        <h2>max Temperature {weather.days[0].tempmax}°C</h2>
                        <h2>max Temperature {weather.days[0].tempmin}°C</h2>
                        <h2>max Temperature {weather.days[0].sunrise}</h2>
                        <h2>max Temperature {weather.days[0].sunset}</h2>
                        <h2>max Temperature {weather.days[0].description} </h2>
                        <h2>Weather Icon: {weather_icons[weather.days[0].icon]} </h2>
                    </div>
                }
            </div>
        </div >
    </>)
}

export default Details