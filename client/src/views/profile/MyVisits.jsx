import { useState } from "react"
import { ClipLoader } from "react-spinners";

import Card from "../home/Card.jsx";
import useProfile from "./useProfile.js";

function MyVisits() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    
    useProfile(setData, setLoading)

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