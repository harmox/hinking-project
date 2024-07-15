import { useState } from "react";
import { registerR } from "../utils/api.js"
import { useNavigate } from 'react-router-dom';
import styles from "../errors.module.css"
import { validateEmail, validatePassword } from "../errors/validations.js";

function Register({ setIsUserLoggedIn, setError }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        repass: ""
    });
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        repass: false
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
        if (name === 'repass') {
            setErrors({ ...errors, repass: !validatePassword(value) });
        }
    };
    async function registerHandler(e) {
        e.preventDefault()
        const { email, password, repass } = formData
        try {
            if (!email || !password || !repass) {
                setError(`Please enter Email, Password and repeat Password!`)
                return
            }
            if (password !== repass) {
                setError(`Password doesnt match!`)
                return
            }

            const data = await registerR({ email, password })
            console.log(data)
            if (data.message) { throw new Error(data.message) }
            localStorage.setItem(`user`, data.userId)
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

                <form action="" onSubmit={registerHandler} onChange={onInputChange}>

                    <input type="text" name="email" id="" placeholder="email" className={errors.email ? styles.error : ""} />
                    <input type="password" name="password" id="" placeholder="password" className={errors.password ? styles.error : ""} />
                    <input type="password" name="repass" id="" placeholder="repeat password" className={errors.repass ? styles.error : ""} />

                    <button type="submit" onSubmit={registerHandler}>Register your accaunt</button>

                </form>
            </div>
        </>
    )
}
export default Register