import { useState, useEffect } from "react";
import styles from "../details.module.css"
import { useParams } from 'react-router-dom';
import { details } from "../utils/api.js";

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

    async function searchPressed(e) {
        e.preventDefault()
        try {

            await fetch(`${api.base}${data.longitude},${data.latitude}/${date}?unitGroup=metric&include=days&key=${api.key}&contentType=json`)
                .then((res) => res.json())
                .then((result) => {
                    console.log(weather)
                    console.log(`fetch data`)
                    setWeather(result);
                });
        } catch (err) {
            console.log(err)
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
                <div className={styles.weatherResult}>
                    <h2>max Temperature</h2>
                    <h2>max Temperature</h2>
                    <h2>max Temperature</h2>
                </div>
            </div>
        </div >
    </>)
}
export default Details