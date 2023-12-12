const express = require("express");
const { getUsers, loginUser, logoutUser } = require("../controllers/user");
const { getCourses, addCourse } = require("../controllers/course");
const { getLectures, addLecture } = require("../controllers/lecture");
const { auth } = require("../controllers/helper");

const router = express.Router();

router.post("/login", loginUser);
router.get("/users", auth, getUsers);
router.get("/logout", auth, logoutUser);

router.post("/course/add", addCourse);
router.get("/course/get", auth, getCourses);

router.post("/lecture/add", addLecture);
router.get("/lecture/get", auth, getLectures);

module.exports = router;
