const { model } = require("../../models/model.js")
const { userAccaunt } = require("../../models/user.js")

module.exports = async function visits(req, res) {
    console.log(req.user?.id)
    try {
        const data = await model.findById(req.params.id)
        const user = await userAccaunt.findById(req.user?.id)
        if (data && user) {
            data.visits.push(req.body.userId)
            const response = await data.save()
            response.populate(`visits`)
            user.visits.push(req.params.id)
            const responseForUser = await user.save()
            res.status(200).json(response)
        }
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: `Something went wrong on adding please try again!` })
    }
}