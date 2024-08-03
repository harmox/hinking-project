import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import isUserLogged from "../../context/isUSerLogged.js"


function RouterGuard() {
    const { isUserLoggedIn } = useContext(isUserLogged)
    console.log(`user is`, isUserLoggedIn)
    return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />

}

export default RouterGuard