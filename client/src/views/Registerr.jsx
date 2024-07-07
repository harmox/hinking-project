import {registerR} from "../utils/api.js"
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    async function registerHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { email, password, repass } = Object.fromEntries(formData)
        try {
            if (!email || !password || !repass) {
                //TODO error
                return
            }
            if (password !== repass) {
                //TODO error
                return
            }

            const response = await registerR({ email, password })
            const { message, userId } = await response.json()
            if (response.ok) {
                localStorage.setItem(`user`, userId)
                navigate('/');
            } else {
                //TODO: handle registration failure (e.g., show error message)
            }
        } catch (err) {

        }
        // console.log(email, password, repass)

    }
    return (
        <>
            <div className="formContainer">

                <form action="" onSubmit={registerHandler}>

                    <input type="text" name="email" id="" placeholder="email" className="email" />
                    <input type="password" name="password" id="" placeholder="password" className="pass" />
                    <input type="password" name="repass" id="" placeholder="repeat password" className="pass" />

                    <button type="submit" onSubmit={registerHandler}>Register your accaunt</button>

                </form>
            </div>
        </>
    )
}
export default Register