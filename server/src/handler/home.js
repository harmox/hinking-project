const { model } = require("../../models/model.js");

module.exports = async function home(req, res) {
    try {
        const data = await model.find().sort({ visits: -1 }).limit(3)
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message)
    }
}