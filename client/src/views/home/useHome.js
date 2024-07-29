import { useEffect, useContext } from "react";
import { homeGet } from "../../utils/api.js";
import ErrorContext from "../../context/errorContext.js";
export default function useHome(setData, setLoading) {
    const { setError } = useContext(ErrorContext)
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        (async () => {
            try {
                const data = await homeGet({ signal });
                setData(data);
            } catch (error) {
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