import { useState, useContext } from "react";
import { registerR } from "../utils/api.js"
import { useNavigate } from 'react-router-dom';
import ErrorContext from "../context/errorContext.js";
import isUserLogged from "../context/isUSerLogged.js";

import styles from "../errors.module.css"
import useForm from "../utils/useForm.js";

function Register() {
    const { setError } = useContext(ErrorContext)
    const { setIsUserLoggedIn } = useContext(isUserLogged)
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
        email: false,
        username: false,
        password: false,
        repass: false
    });
    const { values, changeHandler } = useForm({
        email: ``,
        username: ``,
        password: ``,
        repass: ``
    }, setErrors, errors)
    async function registerHandler(e) {
        e.preventDefault()
        const { email, username, password, repass } = values
        try {
            if (!email || !username || !password || !repass) {
                setError(`Please enter Email, Password and repeat Password!`)
                return
            }
            if (password !== repass) {
                setError(`Password doesnt match!`)
                return
            }

            const data = await registerR({ email, username, password })
            if (data.message) { throw new Error(data.message) }
            sessionStorage.setItem(`user`, data.userId)
            setIsUserLoggedIn(true);
            navigate('/');
        } catch (err) {
            setError(err.message)
        }
        // console.log(email, password, repass)

    }
    return (
        <>
            <div className="formContainer">
                <form className="registration" action="" onSubmit={registerHandler} onChange={changeHandler}>

                    <input type="text" name="email" id="" placeholder="email" className={errors.email ? styles.error : ""} />
                    <input type="text" name="username" id="" placeholder="username" className={errors.username ? styles.error : ""} />
                    <input type="password" name="password" id="" placeholder="password" className={errors.password ? styles.error : ""} />
                    <input type="password" name="repass" id="" placeholder="repeat password" className={errors.repass ? styles.error : ""} />

                    <button type="submit" onSubmit={registerHandler}>Register your accaunt</button>

                </form>
            </div>
        </>
    )
}
export default Register