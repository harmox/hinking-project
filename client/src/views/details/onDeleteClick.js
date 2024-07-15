import { deleteM } from "../../utils/api.js"

async function onDeleteClick(e, id, owner, { navigate }) {
    if (localStorage.user !== owner) {
        return
    }
    if (confirm(`Are you sure ?`)) {
        await deleteM(id)
         navigate(`/catalog`)
    } else {
        navigate(`/details/${id}`)
    }
}
export default onDeleteClick