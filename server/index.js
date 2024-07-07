const e = require(`express`)
const cookieParser = require(`cookie-parser`)
const mongoose = require(`mongoose`);
const { session } = require("./src/session.js");
const { router } = require("./src/router.js");
const { cors } = require("./src/cors.js");
const app = e()
const PORT = process.env.PORT || 3000
const secret = `hiking`

//TODO change on deploy
mongoose.connect(`mongodb://localhost:27017/hiking`)
app.use(cors())
app.use(e.json());
app.use(cookieParser(secret))
app.use(session())
app.use(router)

app.listen(PORT, console.log(`server listen on ${PORT}`))