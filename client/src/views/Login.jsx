import { login } from "../utils/api.js"
import { useNavigate } from "react-router-dom"

function LogIn() {

    const navigate = useNavigate()

    async function onSubmit(e) {
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
                navigate('/');
            } else {
                //TODO: handle registration failure (e.g., show error message)
            }
        } catch (err) {

        }
    }
    return (
        <>
            <div className="formContainer">

                <form action="" onSubmit={onSubmit}>

                    <input type="text" name="email" id="" placeholder="email" className="email" />

                    <input type="password" name="password" id="" placeholder="password" className="pass" />

                    <button type="submit">login to your account</button>

                </form>
            </div>
        </>

    )
}

export default LogIn
