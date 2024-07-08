const { Router } = require(`express`)

const register = require("./handler/register.js")
const login = require("./handler/login.js")
const add = require("./handler/add.js")

const router = Router()

//TODO HANDLER ERRORS
router.get(`/`, (req, res) => {
    res.json({ token: req.cookies.json })
})
router.post(`/register`, register)
router.post(`/login`, login)
router.get(`/logout`, (req, res) => {
    res.clearCookie(`token`)
    res.status(200).json({ message: `Succesfull logout` })
})
router.post(`/create`, add)
module.exports = { router }