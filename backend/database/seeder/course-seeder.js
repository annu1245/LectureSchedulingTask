const Course = require("database/course");

module.exports = CourseSeeder = async () => {
    await Course.insertMany([
        { name: 'Java', description: 'Basic Java Course', image: 'https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969', level: '1'},
        { name: 'JavaScript', description: 'Basic Js Course', image: 'https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969', level: '2'},
    ]);
}
