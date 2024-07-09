const { Router } = require(`express`)

const register = require("./handler/register.js")
const login = require("./handler/login.js")
const add = require("./handler/add.js")
const { model } = require("../models/model.js")

const router = Router()

//TODO HANDLER ERRORS
router.get(`/`, async (req, res) => {
    try {
        const tree = await model.find().sort({ visits: -1 }).limit(3)
        res.status(200).json(tree);
    } catch (err) {
        console.log(err.message)
    }
})
router.post(`/register`, register)
router.post(`/login`, login)
router.get(`/logout`, (req, res) => {
    res.clearCookie(`token`)
    res.status(200).json({ message: `Succesfull logout` })
})
router.post(`/create`, add)
module.exports = { router }