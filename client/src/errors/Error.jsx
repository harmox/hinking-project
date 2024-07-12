import { useEffect } from "react";
function Error({ error, setError }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            setError(null);
        },10000);
        return () => clearTimeout(timer);
    }, [error, setError]);
    return (
        <div className="error">
            <p>{error}</p>
        </div>
    )
}
export default Error