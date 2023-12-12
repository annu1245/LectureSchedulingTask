const express = require("express");
const { getUsers, loginUser, logoutUser } = require("../controllers/user");
const { auth } = require("../controllers/helper");

const router = express.Router();

router.post("/login", loginUser);
router.get("/users", auth, getUsers);
router.get("/logout", auth, logoutUser);

module.exports = router;
