const User = require("database/user");

exports.loginUser = async (req, res) => {
    const { email, type, password } = req.body;
    if(!email || !type || !password ){
        return res.json({ success: false, message: 'All fields are required' })
    }
    const user = await User.findOne({ email, type, password }).exec();
    if (user) {
        req.session.uid = user._id;
        return res.send({ success: true, message: "Successfully logged in!" });
    }
    return res.send({ success: false, message: "User not found!" });
};

exports.logoutUser = (req, res) => {
    req.session.uid = null;
    return res.send({ message: "Logged out!" });
};

exports.getUsers = async (req, res) => {
    const users = await User.find({ type: 2 }).exec();
    return res.send({ data: users, message: "Successfully fetched the user" });
};
