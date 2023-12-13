const mongoose = require('mongoose');
require('database/connection.js');

const UserSeeder = require("database/seeder/user-seeder.js");

UserSeeder().then(() => {
    mongoose.disconnect();
});
