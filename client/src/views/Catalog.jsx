import { useState, useEffect } from "react";
import { catalogGet } from "../utils/api.js";
import Card from "./home/Card.jsx";

function Catalog() {
    const [data, setData] = useState([])
    const [constant, constantSet] = useState([])
    const [search, setSearch] = useState("");
    useEffect(() => {
        (async function Gal() {
            const toShow = await catalogGet()
            const data = await toShow.json()
            setData(data)
            constantSet(data)
        })();
    }, []);
    function buttonClick(e) {
        console.log(constant)
        e.preventDefault()
        if (!search) {
            //TODO Error show
            return
        }
        const newData = constant.filter(e => e.name.includes(search))
        setData(newData)

    }
    return (
        //TODO
        <>
            <div className="catalog">
                <form action="" className="searchForm" onSubmit={buttonClick}>
                    <input type="text" name="search" id="searchParam" placeholder="search" className="search" onChange={(e) => setSearch(e.target.value)} />
                    <button type="submit" id="searchButton">search</button>
                </form>
                {data.map(e => <Card hike={e} key={e._id} scale="200" width="300" />)}
                {/* {data.filter(e => e.name.includes(search)).map(e => <Card hike={e} key={e._id} scale="200" />)} */}
            </div>

        </>
    )
}
export default Catalog