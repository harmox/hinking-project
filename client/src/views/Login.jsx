import { login } from "../utils/api.js"
import { useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react"

import ErrorContext from "../context/errorContext.js";
import isUserLogged from "../context/isUSerLogged.js";
import styles from "../errors.module.css"
import useForm from "../utils/useForm.js";

function LogIn() {
    const { setError } = useContext(ErrorContext)
    const { setIsUserLoggedIn } = useContext(isUserLogged)
    const navigate = useNavigate()
    useEffect(() => {
        if (sessionStorage.user) { navigate(`/`) }

    }, [])
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });
    const { values, changeHandler } = useForm({
        email: ``,
        password: ``,
    }, setErrors, errors)

    async function logInHandler(e) {
        e.preventDefault()
        const { email, password } = values
        if (!email || !password) {
            setError(`Please enter Email and Password!`)
            return
        }
        try {
            const data = await login({ email, password })
            if (data.message) { throw new Error(data.message) }

            sessionStorage.setItem(`user`, data.userId)
            setIsUserLoggedIn(true);
            navigate('/');
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <div className="formContainer">

                <form action="" onSubmit={logInHandler} onChange={changeHandler}>

                    <input type="text" name="email" id="" placeholder="email" className={errors.email ? styles.error : ""} />

                    <input type="password" name="password" id="" placeholder="password" className={errors.password ? styles.error : ''} />

                    <button type="submit">login to your account</button>

                </form>
            </div>
        </>

    )
}

export default LogIn
