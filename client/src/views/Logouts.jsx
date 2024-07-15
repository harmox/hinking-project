import { useNavigate } from "react-router-dom"
import { logout } from "../utils/api.js"

function LogOut({ setIsUserLoggedIn }) {
    (async function () {
        const navigate = useNavigate()
        try {
            const response = await logout()
                localStorage.clear(`user`)
                setIsUserLoggedIn(false)
                navigate(`/login`)
        } catch (err) {
            console.log(err.message)
        }

    })();
}
export default LogOut
