const { model } = require("../../models/model.js");

module.exports = async function detailsGet(req, res) {
    //undefined
    try {
        //TODO return data.owner based on req.user.id
        const data = await model.findById(req.params.id).populate(`visits`)
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message)
    }
}

