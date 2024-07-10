

function Navigation({ isUserLoggedIn }) {
    return (
        <>
            <nav>
                <div className="visits">{isUserLoggedIn && <a href="/visits">My visits</a>}</div>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/catalog">Catalog</a>
                    {isUserLoggedIn ? (
                        <div className="user">
                            <a href="/create">Add journey</a>
                            <a href="/logout">Logout</a>
                        </div>
                    ) : (
                        <div className="guest">
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}
export default Navigation