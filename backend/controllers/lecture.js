const Lecture = require("../database/lecture");

exports.addLecture = async (req, res) => {
    const { user_id, course_id, date } = req.body;

    const lecture = await Lecture.exists({ user_id, course_id, assigned_on: date });
    if (lecture) {
        return res.status(400).send({ message: "Instructor already assigned a course on this date!" });
    }

    Lecture.create({ user_id, course_id, assigned_on: date }, function (err, doc) {
        if (err) return res.status(500).send({ message: "Something went wrong!" });
        if (Object.keys(doc).length > 0) {
            return res.send({ message: "Lecture saved!" });
        }
        return res.status(500).send({ message: "Something went wrong!" });
    });
};

exports.getLectures = (req, res) => {
    Lecture.find({ user_id: req.session.uid }, (err, docs) => {
        if (err) return res.status(500).send({ data: [], message: "Something went wrong!" });
        return res.send({ data: docs, message: "Successfully fetched the lectures" });
    });
};
