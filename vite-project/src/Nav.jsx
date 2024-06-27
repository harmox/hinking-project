function Navigation() {
    return (
        <>
            <nav>
                <div>
                    <a href="/">Home</a>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/search">Search</a>
                </div>
                <div className="user">
                    <a href="/create">Add journey</a>
                    <a href="/logout">Logout</a>
                </div>
                <div className="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </>
    )
}
export default Navigation