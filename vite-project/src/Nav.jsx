function Navigation() {
    return (
        <>
            <nav>
                <div>
                    <a href="/">Home</a>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/search">Search</a>
                </div>
                <div class="user">
                    <a href="/create">Add Animal</a>
                    <a href="/logout">Logout</a>
                </div>
                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </>
    )
}
export default Navigation