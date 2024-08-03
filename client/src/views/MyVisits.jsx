import { useEffect, useState, useContext } from "react"
import { ClipLoader } from "react-spinners";
import { myVisits } from "../utils/api.js";

import ErrorContext from "../context/errorContext.js";

import Card from "./home/Card.jsx";

function MyVisits() {
    const { setError } = useContext(ErrorContext)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        (async () => {
            try {
                const data = await myVisits({ signal })
                data.sum = 0
                data.creations.forEach(e => data.sum += e.visits.length)
                setData(data)
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

    console.log(data?.sum)
    return (
        <div className='catalog'>
            {loading ? (
                <div className="spinner-container">
                    <ClipLoader color="#123abc" loading={loading} size={400} /> {/* Spinner */}
                </div>
            ) : (
                <>
                    {data.creations.length ? (
                        <div className="creations">
                            <h2>{data.username}, you have created {data.creations.length} destination{data.creations.length > 1 && `s`} with total of {data.sum} visitors:</h2>
                            <div className="creationsRow">
                                {data.creations.map(e => <Card hike={e} key={e._id} scale="200" width="300" />)}
                            </div>
                        </div>) :
                        (<h2>You haven`t created anything yet ,{data.username}!</h2>)}


                    {data.visits.length ? (
                        <div className="visited">
                            <h2>{data.username}, you have visited {data.visits.length} destination{data.visits.length > 1 && `s`}:</h2>
                            <div className="visitedRow">
                                {data.visits.map(e => <Card hike={e} key={e._id} scale="200" width="300" />)}
                            </div>
                        </div>
                    ) : (<h2>You haven`t visited anything yet {data.username}!</h2>)}
                </>
                // data.visits.map(e => <Card hike={e} key={e._id} scale="200" width="300" />
            )}
        </div>
    )
}
export default MyVisits