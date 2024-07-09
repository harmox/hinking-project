
const URLS = {
    base: `http://localhost:3000`,
    home: `/`,
    register: `/register`,
    logout: `/logout`,
    login: `/login`,
    create: `/create`,

}

const opitons = {
    headers: { "Content-Type": "application/json" },
    credentials: 'include'
}
//TODO handler errors
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
async function homeGet() {
    try {
        return await fetch(URLS.base + URLS.home)
    } catch (err) {
        console.log(err)
    }
}

async function add(data) {
    opitons.body = JSON.stringify(data),
        opitons.method = `post`
    try {
        const info = await fetch(URLS.base + URLS.create, opitons)
        return info
    } catch (err) {
        console.log(err.message)
    }
}

export { registerR, logout, login, add, homeGet };