import { useEffect, useContext } from "react";
import ErrorContext from "../context/errorContext.js";
function Error({ error }) {
    const { setError } = useContext(ErrorContext)
    useEffect(() => {
        const timer = setTimeout(() => {
            setError(null);
        }, 10000);
        return () => clearTimeout(timer);
    }, [error, setError]);
    return (
        <div className="error">
            <p>{error}</p>
        </div>
    )
}
export default Error