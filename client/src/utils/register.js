const URLS = {
    base: `http://localhost:3000`,
    register: `/register`

}

async function registerR(data) {
    const opitons = {
        method: `post`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    try {

        const result = await fetch(URLS.base + URLS.register, opitons)
        console.log(result)
    } catch (err) {
        console.log(err.message)
    }
}
export default registerR