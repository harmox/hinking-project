const { Router } = require(`express`)
const { userAccaunt } = require("../models/user.js")
const { createToken } = require("./session.js")
const bcrypt = require(`bcrypt`)

const router = Router()

// getPosts: (req, res) => {
//     Post.find()
//     .then((posts) => {
//     res
//     .status(200)
//     .json({ message: 'Fetched posts successfully.', posts });
//     })
//     .catch((err) => {
//     res.status(500)
//     .json({ message: 'Server error!'})
//     });
//     }

router.get(`/`, (req, res) => {
    res.json({ token: req.cookies.json })
})
router.post(`/register`, async (req, res) => {
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

})
router.post(`/login`, async (req, res) => {
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
        res.status(500).json({ message: `Something went wrong on login please try again!` })
    }
})
router.get(`/logout`, (req, res) => {
    res.clearCookie(`token`)
    res.status(200).json({ message: `Succesfull logout` })
})

module.exports = { router }