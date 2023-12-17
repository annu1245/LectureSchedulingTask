const Course = require("database/course");
const path = require('path');

exports.addCourse = async (req, res) => {
    const { name, description, level } = req.body;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    image = req.files.image;
    const file_path = path.posix.join("assets", "uploads", new Date().getTime().toString() + '_' + image.name);
    const uploadPath = path.join(__dirname, "..", file_path);

    try {
        await image.mv(uploadPath);
    } catch (err) {
        return res.send({ success: false, message: "Something went wrong!" });
    }
    const course = await Course.create({ name, description, level, image: file_path });
    console.log(course);
    if (course) {
        return res.send({ success: true, message: "Course saved!" });
    }
    return res.send({ success: false, message: "Something went wrong!" });
};

exports.getCourses = async (req, res) => {
    const courses = await Course.find({}).exec();
    return res.send({ data: courses, message: "Successfully fetched the courses" });
};





