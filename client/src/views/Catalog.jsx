import { useState, useEffect } from "react";
import { catalogGet } from "../utils/api.js";
import Card from "./home/Card.jsx";
import { ClipLoader } from 'react-spinners';

function Catalog({ setError }) {
    const [data, setData] = useState([])
    const [constant, constantSet] = useState([])
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        (async () => {
            try {
                const data = await catalogGet({ signal })
                setData(data)
                constantSet(data)
            } catch (err) {
                setError(`Error with fetching data.`)
            } finally {
                setLoading(false);
            }
        })();
        return () => {
            controller.abort()
        }
    }, []);
    function buttonClick(e) {
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
                {loading ? (
                    <div className="spinner-container">
                        <ClipLoader color="#123abc" loading={loading} size={400} /> {/* Spinner */}
                    </div>
                ) : (
                    data.map(e => <Card hike={e} key={e._id} scale="200" width="300" />)
                )}
                {/* {data.filter(e => e.name.includes(search)).map(e => <Card hike={e} key={e._id} scale="200" />)} */}
            </div>

        </>
    )
}
export default Catalog