import {  useContext, useEffect } from "react";
import { catalogGet } from "../../utils/api.js";
import ErrorContext from "../../context/errorContext.js";


export default function useCatalog( setData, setLoading, constantSet) {
    const { setError } = useContext(ErrorContext)
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
}