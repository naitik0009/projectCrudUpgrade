const express = require("express");
const router = express.Router();

const {
  getAllTask,
  getSngleTask,
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
} = require("../controllers/task");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
