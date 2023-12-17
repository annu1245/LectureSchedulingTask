const mongoose = require('mongoose');
require('database/connection.js');
const UserSeeder = require("database/seeder/user-seeder.js");
const CourseSeeder = require("database/seeder/course-seeder.js");

async function seed () {
    await UserSeeder();
    await CourseSeeder();
    await mongoose.disconnect();
}

seed();
