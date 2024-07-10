import { login } from "../utils/api.js"
import { useNavigate } from "react-router-dom"

function LogIn({ setIsUserLoggedIn }) {
    const navigate = useNavigate()

    async function logInHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { email, password } = Object.fromEntries(formData)
        if (!email || !password) {
            //TODO error
            return
        }
        try {
            const response = await login({ email, password })
            const { message, userId } = await response.json()
            if (response.ok) {
                localStorage.setItem(`user`, userId)
                setIsUserLoggedIn(true);
                navigate('/');
            } else {
                console.log(message)
                //TODO: handle registration failure 
            }
        } catch (err) {

        }
    }
    return (
        <>
            <div className="formContainer">

                <form action="" onSubmit={logInHandler}>

                    <input type="text" name="email" id="" placeholder="email" className="email" />

                    <input type="password" name="password" id="" placeholder="password" className="pass" />

                    <button type="submit">login to your account</button>

                </form>
            </div>
        </>

    )
}

export default LogIn
