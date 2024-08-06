import { visits } from "../../utils/api.js"

async function interested(e, owner, id, setVisited, setData, setIsOwner) {

    if (owner == sessionStorage.user) { return }
    try {

        const response = await visits(id, { userId: sessionStorage.user })
        if (!response) { return }
        setData(response)
        setIsOwner(response.owner === sessionStorage.user)
        setVisited(true)
    } catch {
        console.log('Error updating visits')
    }
}

export default interested