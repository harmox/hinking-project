
const URLS = {
    base: `http://localhost:3000`,
    register: `/register`,
    logout: `/logout`,
    login: `/login`

}

const opitons = {
    headers: { "Content-Type": "application/json" },
    credentials: 'include'
}

async function registerR(data) {
    opitons.body = JSON.stringify(data),
        opitons.method = `post`
    try {
        const info = await fetch(URLS.base + URLS.register, opitons)
        return info
    } catch (err) {
        console.log(err.message)
    }
}
async function login(data) {
    opitons.body = JSON.stringify(data),
        opitons.method = `post`
    try {
        const info = await fetch(URLS.base + URLS.login, opitons)
        return info
    } catch (err) {
        console.log(err.message)
    }
}
async function logout() {
    opitons.method = `get`

    return await fetch(URLS.base + URLS.logout, opitons)
}

export { registerR, logout, login };