const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema(
    {
        name: String,
        description: String,
        image: String,
        level: {
            type: Number,
            default: 1,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Course", courseSchema);
