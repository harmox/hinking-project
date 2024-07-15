import { visits } from "../../utils/api.js"

async function interested(e, owner, id, { setVisited }) {
    if (owner == localStorage.user) { return }
    const response = await visits(id, { userId: localStorage.user })
    if (!response) { return }
    setVisited(true)
}
export default interested