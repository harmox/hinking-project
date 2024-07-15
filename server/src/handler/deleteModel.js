const { model } = require("../../models/model.js");

module.exports = async function deleteModel(req, res) {
    //undefined
    try {
        const data = await model.findByIdAndDelete(req.params.id)
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message)
    }
}