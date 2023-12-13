const User = require("../database/user");

exports.auth = async (req, res, next) => {
    const user = await User.findById(req.session.uid).exec();
    if (user) {
        return next();
    }
    return res.status(401).send({ message: "Not authorized!" });
};
