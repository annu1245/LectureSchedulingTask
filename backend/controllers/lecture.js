const Lecture = require("../database/lecture");

exports.addLecture = async (req, res) => {
    const { user_id, course_id, date } = req.body;

    var lecture = await Lecture.exists({ user_id, assigned_on: date }).exec();
    if (lecture) {
        return res.send({ success: false, message: "Instructor already assigned a course on this date!" });
    }

    lecture = Lecture.create({ user_id, course_id, assigned_on: date });
    if (lecture) {
        return res.send({ success: true, message: "Lecture saved!" });
    }
    return res.send({ success: false, message: "Something went wrong!" });
};

exports.getLectures = async (req, res) => {
    const lectures = await Lecture.find({ user_id: req.session.uid }).exec();
    return res.send({ data: lectures, message: "Successfully fetched the lectures" });
};
