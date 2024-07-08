const { userAccaunt } = require("../../models/user.js");
const bcrypt = require(`bcrypt`);
const { createToken } = require("../session.js");

module.exports = async function (req, res) {
    const { email, password } = req.body
    try {
        //TODO requirments
        const exist = await userAccaunt.findOne({ email })
        if (!exist) {//TODO alert taken
            return res.status(400).json({ message: 'Email does not exist!' });
        }
        const match = await bcrypt.compare(password, exist.password)
        if (!match) { return res.status(400).json({ message: `Wrong password` }) }
        const token = createToken(exist);
        res.cookie(`token`, token, { httpOnly: true })
        res.status(200).json({ message: `Logged in succesfully!`, userId: exist._id })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: `Something went wrong on login please try again!` })
    }
}