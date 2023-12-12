const User = require("../database/user");

exports.auth = (req, res, next) => {
    User.findById(req.session.uid, (err, doc) => {
        if (err) return res.status(500).send({ message: "Something went wrong!" });
        if (doc.length > 0) return next();
        return res.status(401).send({ message: "Not authorized!" });
    });
};
