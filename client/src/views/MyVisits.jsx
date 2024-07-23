import { useEffect, useState ,useContext} from "react"
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { myVisits } from "../utils/api.js";
import ErrorContext from "../context/errorContext.js";

import Card from "./home/Card.jsx";

function MyVisits() {
const { setError } = useContext(ErrorContext)
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!localStorage.user) { navigate(`/`) }
        const controller = new AbortController();
        const signal = controller.signal;
        (async () => {
            try {
                const data = await myVisits({ signal })
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
    console.log(data)
    return (
        <>
            <div className='catalog'>
                {loading ? (
                    <div className="spinner-container">
                        <ClipLoader color="#123abc" loading={loading} size={400} /> {/* Spinner */}
                    </div>
                ) : (
                    data.visits.length ?
                        <>
                            <h2>{data.username}, you have {data.visits.length} visit{data.visits.length > 1 && `s`}:</h2>
                            {data.visits.map(e => <Card hike={e} key={e._id} scale="200" width="300" />)}
                        </> :
                        (<h2>You havent visited anything yet {data.username}!</h2>)
                    // data.visits.map(e => <Card hike={e} key={e._id} scale="200" width="300" />
                )}
            </div>
        </>
    )
}
export default MyVisits