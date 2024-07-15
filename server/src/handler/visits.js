const { model } = require("../../models/model.js")

module.exports = async function edit(req, res) {
    try {
        const data = await model.findById(req.params.id)
        if (data) {
            data.visits.push(req.body.userId)
            const response = await data.save()
            res.status(200).json({ response })
        }
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: `Something went wrong on adding please try again!` })
    }
}