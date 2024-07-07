import { useState, useEffect } from "react"

function Navigation() {
    const [user, setUser] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(true);
        } else { setUser(false) }
    }, [user]);
    return (
        <>
            <nav>
                <div>
                    <a href="/">Home</a>
                    <a href="/catalog">Catalog</a>
                    <a href="/search">Search</a>
                </div>
                {user ? (
                    <div className="user">
                        <a href="/create">Add journey</a>
                        <a href="/logout" >Logout</a>
                    </div>
                ) : (
                    <div className="guest">
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>
                )}
            </nav>
        </>
    )
}
export default Navigation