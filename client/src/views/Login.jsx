import { login } from "../utils/api.js"
import { useNavigate } from "react-router-dom"
import styles from "../errors.module.css"
import { useEffect, useState } from "react"
import { validateEmail, validatePassword } from "../errors/validations.js";

function LogIn({ setIsUserLoggedIn, setError }) {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.user) { navigate(`/`) }

    }, [])
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Validate email and password
        if (name === 'email') {
            setErrors({ ...errors, email: !validateEmail(value) });
        }
        if (name === 'password') {
            setErrors({ ...errors, password: !validatePassword(value) });
        }
    };
    async function logInHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { email, password } = Object.fromEntries(formData)
        if (!email || !password) {
            setError(`Please enter Email and Password!`)
            return
        }
        try {
            const data = await login({ email, password })
            if (data.message) { throw new Error(data.message) }

            localStorage.setItem(`user`, data.userId)
            setIsUserLoggedIn(true);
            navigate('/');
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <div className="formContainer">

                <form action="" onSubmit={logInHandler} onChange={onInputChange}>

                    <input type="text" name="email" id="" placeholder="email" className={errors.email ? styles.error : ""} />

                    <input type="password" name="password" id="" placeholder="password" className={errors.password ? styles.error : ''} />

                    <button type="submit">login to your account</button>

                </form>
            </div>
        </>

    )
}

export default LogIn
