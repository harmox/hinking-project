const api = {
    key: "FZP48UWCAWRCQ59J8PPXRSUAD",
    base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
};
async function searchPressed(e, data, date, { setWeather }, { setLoadingWeather }, { setIsWeatherFetched }, { setError }) {
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
export default searchPressed