const { userAccaunt } = require("../../models/user.js");
const { model } = require("../../models/model.js");

//TODO req.user info
module.exports = async function profile(req, res) {
    console.log(req.user)
    try {
        const user = await userAccaunt.findById(req.user?.id).populate(`visits`)
        const creations = await model.find({ owner: req.user?.id })
        const data = {
            email: user.email,
            username: user.username,
            visits: user.visits,
            creations
        }
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message)
    }
}