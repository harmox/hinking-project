const { model } = require("../../models/model.js")

module.exports = async function add(req, res) {
    try {
        //TODO requirments
        const data = await model.create(req.body)
        res.status(201).json({ message: `Sigth added in succesfully!`, data })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: `Something went wrong on login please try again!` })
    }
}