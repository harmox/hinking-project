

function Navigation({ isUserLoggedIn, Link }) {
    return (
        <>
            <nav>
                <div className="visits">{isUserLoggedIn && <Link to="/visits">My visits</Link>}</div>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    {isUserLoggedIn ? (
                        <div className="user">
                            <Link to="/create">Add journey</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    ) : (
                        <div className="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}
export default Navigation