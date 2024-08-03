import { NavLink } from "react-router-dom"
import { useContext } from "react";
import isUserLogged from "../context/isUSerLogged.js"

function Navigation() {
    const { isUserLoggedIn } = useContext(isUserLogged)
    return (
        <>
            <nav>
                <div className="visits">{isUserLoggedIn && <NavLink style={({ isActive }) => isActive ? { textDecoration: `underline` } : {}} to="/profile">Profile</NavLink>}</div>
                <div className="links">
                    <NavLink to="/" style={({ isActive }) => isActive ? { textDecoration: `underline` } : {}}>Home</NavLink>
                    <NavLink to="/catalog" style={({ isActive }) => isActive ? { textDecoration: `underline` } : {}}>Catalog</NavLink>
                    {isUserLoggedIn ? (
                        <div className="user">
                            <NavLink
                                to="/create"
                                // className={isEditPage ? styles.disabledLink  : ""}
                                style={({ isActive }) => (isActive ? { textDecoration: "underline" } : {})}
                            // onClick={(e) => isEditPage && e.preventDefault()}
                            >
                                Add destination
                            </NavLink>
                            <NavLink to="/logout" style={({ isActive }) => isActive ? { textDecoration: `underline` } : {}}>Logout</NavLink>
                        </div>
                    ) : (
                        <div className="guest">
                            <NavLink to="/login" style={({ isActive }) => isActive ? { textDecoration: `underline` } : {}}>Login</NavLink>
                            <NavLink to="/register" style={({ isActive }) => isActive ? { textDecoration: `underline` } : {}}>Register</NavLink>
                        </div>
                    )}
                </div>
            </nav >
        </>
    )
}
export default Navigation