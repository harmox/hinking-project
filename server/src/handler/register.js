const { userAccaunt } = require("../../models/user.js");
const bcrypt = require(`bcrypt`);
const { createToken } = require("../session.js");

module.exports = async function register(req, res) {
    const { email, password } = req.body
    try {
        //TODO requirments
        const exist = await userAccaunt.findOne({ email })
        if (exist) {//TODO alert taken
            return res.status(400).json({ message: 'Email is already taken!' });
        }
        const user = await userAccaunt.create({ email, password: await bcrypt.hash(password, 10) })
        const token = createToken(user)
        res.cookie(`token`, token, { httpOnly: true })
        res.status(201).json({ message: `Accaunt created succesfully!`, userId: user._id })
    } catch (err) {
        res.status(500).json({ message: `Something went wrong on register please try again!` })
    }

}