const express = require("express");
const {
  getAllLessons,
  getALesson,
  createOrder,
  update,
} = require("../controllers/lessonControllers");

const router = express.Router();
//testing.
router.get("/test", (req, res) => {
  res.send("test route is working ");
});

// get all lessons.
router.get("/lessons", getAllLessons);

//get a single lesson by id.

router.get("/lessons/:id", getALesson);

// post a new order.
router.post("/lessons/order", createOrder);

// update an order.

router.put("/orders/:id", update);

module.exports = router;
