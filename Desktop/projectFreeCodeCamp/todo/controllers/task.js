const model = require("../models/task");

const getAllTask = async function (request, response) {
  try {
    const result = await model.find({});
    response.status(200).json({ result });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

const createTask = async function (request, response) {
  try {
    const result = await model.create(request.body);
    response.status(201).json({ result });
  } catch (error) {
    response.status(500).json({ msg: error });
  }
  // response.send("controller createTask");
};

const getSingleTask = async function (request, response) {
  try {
    const result = await model.findById(request.params.id);
    if (!result) {
      return response
        .status(404)
        .json({ msg: `No task with is${request.params.id}` });
    } else {
      // similiar to .json({result})
      // response.status(201).send();
      response.status(201).json({ result });
    }
  } catch (error) {
    response.status(500).json({ msg: error });
  }
  // response.send("getSingleTask");
};

const updateTask = async function (request, response) {
  // response.send("updateTask");
  try {
    const body = request.body;

    const result = await model.findByIdAndUpdate(request.params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      return response
        .status(404)
        .json({ msg: `No task with is${request.params.id}` });
    } else {
      // response.status(201).json({ result });
      response.status(201).json({ status: "successfully updated" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async function (request, response) {
  // response.send("delete task");
  try {
    const result = await model.findByIdAndDelete(request.params.id);

    if (!result) {
      return response
        .status(404)
        .json({ msg: `No task with is${request.params.id}` });
    } else {
      // response.status(201).json({ result });
      response.status(201).json({ status: "successfully removed" });
    }
  } catch (error) {
    response.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
};
