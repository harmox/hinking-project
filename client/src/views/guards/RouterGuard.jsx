import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import isUserLogged from "../../context/isUSerLogged.js"


function RouterGuard() {
    const { isUserLoggedIn } = useContext(isUserLogged)
    return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />

}

export default RouterGuard