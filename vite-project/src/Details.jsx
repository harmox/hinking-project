import { useState } from "react";

const api = {
    key: "bad6cea6cef7df4ca31499f8ecfca4f7",
    base: "https://api.openweathermap.org/data/2.5/",
};
//TODO use and get from   open-meteo
function Details() {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    console.log(weather)
    async function searchPressed(e) {
        e.preventDefault()
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            });
    }
    //TODO check if owner 
    return (<>
        <div className="details">

            <div className="containerDetails">
                <h1>NAME HERE</h1>
                <img src="/rilski.jpg" alt="rilski" height="300" />
                <h3>Elevation: </h3>
                <h3>Distance in kilometers: </h3>
                <h3>Ascend: <br />
                    Ascend time is in hours and its for one way only!
                </h3>
                <p className="description">asdasdasdadsa</p>
                <div className="buttonPair">
                    <button type="submit">Interested</button>
                    <button type="submit">Rate</button>
                </div>
                <div className="buttonPair">
                    <button type="submit">Edit</button>
                    <button type="submit">Delete</button>
                </div>
            </div>
            <div className="checkWeather">
                <form className="centerForm" onSubmit={searchPressed} >
                    <h4 >Check weather:</h4>
                    <input
                        type="text"
                        placeholder="Enter city/town..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <input type="date"
                        id="Test_DatetimeLocal" name="date" />
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