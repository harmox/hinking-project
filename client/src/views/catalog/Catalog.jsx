import { useContext, useState } from "react";
import { ClipLoader } from 'react-spinners';

import Card from "../home/Card.jsx";
import useCatalog from "./useCatalog.js";
import ErrorContext from "../../context/errorContext.js";

function Catalog() {
    const [data, setData] = useState([])
    const [constant, constantSet] = useState([])
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const { setError } = useContext(ErrorContext)

    useCatalog(setData, setLoading, constantSet)

    function searchPressed(e) {
        e.preventDefault()
        if (!search) {
            return setError(`Please enter valid search params!`)
        }
        const newData = constant.filter(e => e.name.toLowerCase().includes(search.toLocaleLowerCase()))
        setData(newData)
    }   
    return (
        //TODO
        <>
            <div className="catalog">
                <form action="" className="searchForm" onSubmit={searchPressed}>
                    <input type="text" name="search" id="searchParam" placeholder="search by name" className="search" onChange={(e) => setSearch(e.target.value)} />
                    <button type="submit" id="searchButton">search</button>
                </form>
                {loading ? (
                    <div className="spinner-container">
                        <ClipLoader color="#123abc" loading={loading} size={400} /> {/* Spinner */}
                    </div>
                ) : (
                    data.map(e => <Card hike={e} key={e._id} scale="200px" width="300px" />)
                )}
                {/* {data.filter(e => e.name.includes(search)).map(e => <Card hike={e} key={e._id} scale="200" />)} */}
            </div>

        </>
    )
}
export default Catalog