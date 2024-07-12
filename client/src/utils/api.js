
const URLS = {
    base: `http://localhost:3000`,
    home: `/`,
    register: `/register`,
    logout: `/logout`,
    login: `/login`,
    create: `/create`,
    catalog: `/catalog`,
    details: `/details/`

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
    try {

        return await fetch(URLS.base + URLS.logout)
    } catch (err) {
        console.log(err.message)
    }
}
async function homeGet() {
    try {
        return await fetch(URLS.base + URLS.home)
    } catch (err) {
        console.log(err)
    }
}
async function catalogGet() {
    try {
        return await fetch(URLS.base + URLS.catalog)
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
async function details(id) {
    try {
        return await fetch(URLS.base + URLS.details + id)
    } catch (err) {
        console.log(err)
    }
}

export { registerR, logout, login, add, homeGet, catalogGet, details };