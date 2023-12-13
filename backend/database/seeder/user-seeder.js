const User = require("database/user");

module.exports = UserSeeder = async () => {
    await User.insertMany([
        { first_name: 'Admin', last_name: 'User', email: 'admin@gmail.com', password: '12341234', type: 1 },
        { first_name: 'Aman', last_name: 'Tiwari', email: 'aman@gmail.com', password: '12341234', type: 2 },
        { first_name: 'Yogesh', last_name: 'Yadav', email: 'yogesh@gmail.com', password: '12341234', type: 2 },
        { first_name: 'Neha', last_name: 'Singh', email: 'neha@gmail.com', password: '12341234', type: 2 },
        { first_name: 'Supriya', last_name: 'Upadhyay', email: 'supriya@gmail.com', password: '12341234', type: 2 },
        { first_name: 'Manoj', last_name: 'Vishwakarma', email: 'manoj@gmail.com', password: '12341234', type: 2 },
    ]);
}
