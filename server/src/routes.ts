import express from "express";

import { TaskController } from "./controllers/taskController";

const routes = express.Router();

const taskController = new TaskController();

routes.get("/", taskController.getTasks);

routes
  .route("/tasks")
  .get(taskController.getTasks)
  .post(taskController.create)
  .patch(taskController.getTasks)
  .delete(taskController.getTasks);

export default routes;
