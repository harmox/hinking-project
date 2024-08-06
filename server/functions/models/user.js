const mongoose = require(`mongoose`)

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            match: /.+\@.+\..+/,
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        visits: [{
            type: mongoose.Types.ObjectId,
            ref: `hikingModel`,
            default: []
        }],
    },
    {
        collation: { locale: `en`, strength: 2 },
    }
)
const userAccaunt = mongoose.model(`User`, userSchema)
module.exports = { userAccaunt }