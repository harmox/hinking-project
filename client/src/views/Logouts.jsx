import { useNavigate } from "react-router-dom"
import { logout } from "../utils/api.js"

function LogOut({ setIsUserLoggedIn }) {
    (async function () {
        const navigate = useNavigate()
        try {
            const response = await logout()
            if (response.ok) {
                localStorage.clear()
                setIsUserLoggedIn(false)
                navigate(`/`)
            }
        } catch (err) {
            console.log(err.message)
        }

    })();
}
export default LogOut
