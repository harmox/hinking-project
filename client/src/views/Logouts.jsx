import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"
import isUserLogged from "../context/isUSerLogged.js";

import { logout } from "../utils/api.js"

function LogOut() {
    const { setIsUserLoggedIn } = useContext(isUserLogged)
    const navigate = useNavigate()
    useEffect(() => {
        (async function () {
            try {
                const response = await logout()
                sessionStorage.clear(`user`)
                setIsUserLoggedIn(false)
                navigate(`/login`)
            } catch (err) {
                console.log(err.message)
            }

        })();
    }, [])
}
export default LogOut
