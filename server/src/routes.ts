import express from "express";

import { TaskController } from "./controllers/taskController";

const routes = express.Router();

const taskController = new TaskController();

routes.get("/", (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .send(
      "<html>Please, access the tasks route to get proper response: <a href='/tasks'>/tasks</a></html>"
    );
});

routes
  .route("/tasks")
  .get(taskController.getTasks)
  .post(taskController.create)
  .patch(taskController.update)
  .delete(taskController.delete);

export default routes;
