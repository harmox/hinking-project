import { useContext, useEffect } from "react";
import ErrorContext from "../../context/errorContext.js";
import { myVisits } from "../../utils/api.js";
function useProfile(setData, setLoading) {
    const { setError } = useContext(ErrorContext)
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
}
export default useProfile