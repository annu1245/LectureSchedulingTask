const mongoose = require("mongoose");
const { Schema } = mongoose;

const lectureSchema = new Schema(
    {
        user_id: { type: Schema.Types.ObjectId, ref: "User" },
        course_id: { type: Schema.Types.ObjectId, ref: "Course" },
        assigned_on: Date,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Lecture", lectureSchema);
