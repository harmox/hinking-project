const { Router } = require(`express`)

const register = require("./handler/register.js")
const login = require("./handler/login.js")
const add = require("./handler/add.js")
const details = require("./handler/details.js")
const home = require("./handler/home.js")
const catalog = require("./handler/catalog.js")

const router = Router()

//TODO HANDLER ERRORS
router.get(`/`, home)
router.get(`/catalog`, catalog)
router.get(`/details/:id`, details)
router.post(`/register`, register)
router.post(`/login`, login)
router.get(`/logout`, (req, res) => {
    res.clearCookie(`token`)
    res.status(200).json({ message: `Succesfull logout` })
})
router.post(`/create`, add)
module.exports = { router }