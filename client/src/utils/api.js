
const URLS = {
    base: `http://localhost:3000`,
    home: `/`,
    register: `/register`,
    logout: `/logout`,
    login: `/login`,
    create: `/create`,
    profile: `/profile`,
    catalog: `/catalog`,
    details: `/details/`,
    visits: `/visits/`,
    edit: `/edit/`,
    delete: `/delete/`

}

async function fetching(method, url, data, signal) {
    const opitons = {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: 'include'
    }
    if (signal) {
        opitons.signal = signal
    }
    if (data !== undefined) {
        opitons.body = JSON.stringify(data)
    }
    try {
        const response = await fetch(url, opitons)
        console.log(response)
        if (!response.ok) {
            if (response.status == `400`) {
                return response.json()
            }
            throw new Error(`Try again`)
        }
        return await response.json()
    } catch (err) {
        console.log(err.message)
    }
}
async function registerR(data) {
    return await fetching(`post`, URLS.base + URLS.register, data)
}
async function login(data) {
    return await fetching(`post`, URLS.base + URLS.login, data)
}
async function logout() {
    return await fetching(`get`, URLS.base + URLS.logout)
}
async function homeGet({ signal }) {
    return await fetching(`get`, URLS.base + URLS.home, undefined, signal)
}
async function catalogGet({ signal }) {
    return await fetching(`get`, URLS.base + URLS.catalog, undefined, signal)
}

async function add(data) {
    return await fetching(`post`, URLS.base + URLS.create, data)
}
async function visits(id, data) {
    return await fetching(`put`, URLS.base + URLS.visits + id, data)
}
async function edit(id, data) {
    return await fetching(`put`, URLS.base + URLS.edit + id, data)
}
async function detailsGet(id) {
    return await fetching(`get`, URLS.base + URLS.details + id)
}
async function myVisits({ signal }) {
    return await fetching(`get`, URLS.base + URLS.profile, undefined, signal)
}

async function deleteM(id) {
    return await fetching(`delete`, URLS.base + URLS.delete + id)
}

export { registerR, logout, login, add, homeGet, catalogGet, detailsGet, edit, deleteM, visits, myVisits };