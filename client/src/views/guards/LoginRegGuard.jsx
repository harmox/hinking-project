import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import isUserLogged from "../../context/isUSerLogged.js"


function LogRegGuard() {
    const { isUserLoggedIn } = useContext(isUserLogged)
    return !isUserLoggedIn ? <Outlet /> : <Navigate to="/" />

}

export default LogRegGuard