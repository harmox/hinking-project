const { model } = require("../../models/model.js")

module.exports = async function edit(req, res) {
    const name = req.body.name
    try {
        const exist = await model.findOne({ name })
        if (exist) {
            return res.status(400).json({ message: 'Name is already in the list!' });
        }
        const data = await model.findById(req.params.id)
        data.name = name,
            data.distance = req.body.distance,
            data.time = req.body.time,
            data.longitude = req.body.longitude,
            data.latitude = req.body.latitude,
            data.image = req.body.image,
            data.description = req.body.description
        await data.save()

        res.status(201).json({ undefined, data })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: `Something went wrong on adding please try again!` })
    }
}