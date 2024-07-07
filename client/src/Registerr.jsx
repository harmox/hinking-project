import registerR from "./utils/register.js"

function Register() {
    async function registerHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const { email, password, repass } = Object.fromEntries(formData)
        try {
            registerR({ email, password, repass })
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