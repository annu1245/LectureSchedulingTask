const User = require("../database/user");

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email, type: req.body.type, password: req.body.password }, (err, doc) => {
        if (err) return res.status(500).send({ message: "Something went wrong!" });
        if (doc.length > 0) {
            req.session.uid = doc._id;
            return res.send({ message: "Successfully logged in!" });
        }
        return res.status(404).send({ message: "Something went wrong!" });
    });
};

exports.logoutUser = (req, res) => {
    req.session.uid = null;
    return res.send({ message: "Logged out!" });
};

exports.getUsers = (req, res) => {
    User.find({ type: 2 }, (err, docs) => {
        if (err) return res.status(500).send({ data: [], message: "Something went wrong!" });
        return res.send({ data: docs, message: "Successfully fetched the user" });
    });
};