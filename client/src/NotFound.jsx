import { NavLink } from "react-router-dom"

function NotFound({ isUserLoggedIn }) {
    return (
        <div className="welcome">
            <h1>Ooh, you are lost! Here`s a map!</h1>
            <div className="linksOn404">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                {isUserLoggedIn ? (
                    <>
                        <NavLink
                            to="/create"
                        // className={isEditPage ? styles.disabledLink  : ""}
                        // onClick={(e) => isEditPage && e.preventDefault()}
                        >
                            Add journey
                        </NavLink>
                        <NavLink to="/logout" >Logout</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" >Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                    </>
                )}

            </div>
        </div>
    )
}
export default NotFound