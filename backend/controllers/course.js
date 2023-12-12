const Course = require("../database/course");
const path = require('path');

exports.addCourse = async (req, res) => {
    const { name, description, level } = req.body;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    image = req.files.image;
    uploadPath = path.join(__dirname, "..", "assets", "uploads", new Date().getTime().toString() + '_' + image.name);

    try {
        await image.mv(uploadPath);
    } catch (err) {
        return res.status(500).send({ message: "Something went wrong!" });
    }
    Course.create({ name, description, level, image: uploadPath }, function (err, doc) {
        if (err) return res.status(500).send({ message: "Something went wrong!" });
        if (Object.keys(doc).length > 0) {
            return res.send({ message: "Course saved!" });
        }
        return res.status(500).send({ message: "Something went wrong!" });
    });
};

exports.getCourses = (req, res) => {
    Course.find({}, (err, docs) => {
        if (err) return res.status(500).send({ data: [], message: "Something went wrong!" });
        return res.send({ data: docs, message: "Successfully fetched the courses" });
    });
};
