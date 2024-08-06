const { model } = require("../../models/model.js");

module.exports = async function catalog(req, res) {
    try {
        const data = await model.find()
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message)
    }
}