const mongoose = require(`mongoose`)

const hikeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },

        distance: {
            type: Number,
            required: true
        },
        time: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true,
            match: /^(ftp|http|https):\/\/[^ "]+$/
        },
        description: {
            type: String,
            required: true,
            minlength: 10
        },
        visits: [{
            type: mongoose.Types.ObjectId,
            ref: `User`,
            default: []
        }],
        owner: {
            type: mongoose.Types.ObjectId,
            ref: `User`,
            require: true
        },
    }
)

const model = mongoose.model(`hikingModel`, hikeSchema)
module.exports = { model }