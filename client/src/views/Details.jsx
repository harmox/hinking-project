import { useState } from "react";

const api = {
    key: "FZP48UWCAWRCQ59J8PPXRSUAD",
    base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
};
//TODO use and get from   open-meteo
function Details() {
    const [date, setDate] = useState("");
    const [weather, setWeather] = useState({});

    async function searchPressed(e) {
        e.preventDefault()
        await fetch(`${api.base}${`lan`, `lon`}/${date}?unitGroup=metric&include=days&key=${api.key}&contentType=json`)
            .then((res) => res.json())
            .then((result) => {
                console.log(weather)
                console.log(`fetch data`)
                setWeather(result);
            });
    }
    //TODO check if owner 
    return (<>
        <div className="details">

            <div className="containerDetails">
                <h1>NAME HERE</h1>
                <img src="/rilski.jpg" alt="rilski" height="300" />
                <h3>Distance in kilometers: </h3>
                <h3>Ascend: <br />
                    Ascend time is in hours and its for one way only!
                </h3>
                <p className="description">asdasdasdadsa</p>
                <div className="buttonPair">
                    <button type="submit">Interested</button>
                    <button type="submit">Visits</button>
                </div>
                <div className="buttonPair">
                    <button type="submit">Edit</button>
                    <button type="submit">Delete</button>
                </div>
            </div>
            <div className="checkWeather">
                <form className="centerForm" onSubmit={searchPressed} >
                    <h4 >Check weather:</h4>
                    <input type="date"
                        id="Test_DatetimeLocal" name="date" onChange={(e) => setDate(e.target.value)} />
                    <button type="submit">check</button>
                </form>
                <div className="weatherResult">
                    <h2>max Temperature</h2>
                    <h2>max Temperature</h2>
                    <h2>max Temperature</h2>
                </div>
            </div>
        </div >
    </>)
}
export default Details