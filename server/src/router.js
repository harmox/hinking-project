const { Router } = require(`express`)

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
    res.send(`<h1>Hello</h1>`)
})
router.get(`/register`, (req, res) => {
    res.send(`REGISTER`)
})

module.exports = { router }