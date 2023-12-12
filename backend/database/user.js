const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String,
        type: {
            type: Number,
            default: 2,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
