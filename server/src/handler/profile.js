const { userAccaunt } = require("../../models/user.js");
//TODO req.user info
module.exports = async function profile(req, res) {
    try {
        console.log(req.user)
        const user = await userAccaunt.findById(req.user.id).populate(`visits`)
        const data = {
            email: user.email,
            username: user.username,
            visits: user.visits
        }
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message)
    }
}