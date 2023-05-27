import express from "express";

import tasks from "../api/tasks";
import { Task } from "../types/task";

export class TaskController {
  getTasks(req: express.Request, res: express.Response) {
    const result: Task[] = tasks;

    if (!result) {
      res.status(404).send({ message: "No tasks found." });
    }

    res.status(200).send(result);
  }

  create(req: express.Request, res: express.Response) {
    const { title } = req.body;

    const result: Task[] = tasks;

    if (!title) {
      return res.status(406).send({ error: "Give a title to your task." });
    }

    const newTask: Task = {
      id: result.length + 1,
      titulo: title,
      concluida: false,
    };

    result.push(newTask);
    res.status(201).send({
      message: "New task created.",
      newTask,
    });
  }
}
