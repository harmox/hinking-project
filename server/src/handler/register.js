const { userAccaunt } = require("../../models/user.js");
const bcrypt = require(`bcrypt`);
const { createToken } = require("../session.js");

module.exports = async function register(req, res) {
    const { email, username, password } = req.body
    try {
        const exist = await userAccaunt.findOne({ email })
        const usernameExist = await userAccaunt.findOne({ username })
        if (exist) {
            return res.status(400).json({ message: 'Email is already taken!' });
        }
        if (usernameExist) {
            return res.status(400).json({ message: 'Username is already taken!' });
        }
        const user = await userAccaunt.create({ email, username, password: await bcrypt.hash(password, 10) })
        const token = createToken(user)

        res.cookie(`token`, token, { httpOnly: true, sameSite: 'Strict', secure: true })
        res.status(201).json({ userId: user._id })
    } catch (err) {
        res.status(500).json({ message: `Something went wrong during registration registration. Please try again with valid Email!` })
    }
}