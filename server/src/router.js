const { Router } = require(`express`)
const home = require("./handler/home.js")
const catalog = require("./handler/catalog.js")
const detailsGet = require("./handler/details.js")
const add = require("./handler/add.js")
const edit = require("./handler/edit.js")
const deleteModel = require("./handler/deleteModel.js")

const login = require("./handler/login.js")
const register = require("./handler/register.js")



const router = Router()

//TODO HANDLER ERRORS
router.get(`/`, home)
router.get(`/catalog`, catalog)

router.get(`/details/:id`, detailsGet)
router.delete(`/delete/:id`, deleteModel)
router.put(`/edit/:id`, edit)

router.post(`/create`, add)
router.post(`/register`, register)
router.post(`/login`, login)
router.get(`/logout`, (req, res) => {
    res.clearCookie(`token`)
    res.status(200).json({ message: `Succesfull logout` })
})
module.exports = { router }