const express = require(`express`)
const cookieParser = require(`cookie-parser`)
const mongoose = require(`mongoose`);
const { session } = require("./src/session.js");
const { cors } = require("./src/cors.js");
const { router } = require("./src/router.js");
const app = express()
const PORT = process.env.PORT || 3000
const secret = `superBigSecret`

//TODO change on deploy
mongoose.connect(`mongodb://localhost:27017/hiking`)
app.use(cors())
app.use(express.json());
app.use(cookieParser(secret))
app.use(session())

app.use(router)

app.listen(PORT, console.log(`server listen on ${PORT}`))