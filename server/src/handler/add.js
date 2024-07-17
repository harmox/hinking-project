const { model } = require("../../models/model.js")

module.exports = async function add(req, res) {
    //TODO before add check for same name 
    try {
        //TODO requirments if logged in
        const name = req.body.name
        const existing = await model.findOne({ name })
        if(existing){
            return res.status(400).json({ message: 'Sight with that name is already added!' });
        }
        const data = await model.create(req.body)
        res.status(201).json({ data })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: `Something went wrong on adding please try again!` })
    }
}