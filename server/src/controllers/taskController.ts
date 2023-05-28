import express from "express";

import tasks from "../api/tasks";
import { Task } from "../types/task";

export class TaskController {
  getTasks(req: express.Request, res: express.Response) {
    const result: Task[] = tasks;

    if (!result) {
      return res.status(404).send({ message: "No tasks found." });
    }

    res.status(200).send(result);
  }

  create(req: express.Request, res: express.Response) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send({ error: "Give a title to your task." });
    }

    const result: Task[] = tasks;

    if (!result) {
      return res.status(404).send({ message: "No tasks found." });
    }

    const lastTaskId = result[result.length - 1].id;

    const newTask: Task = {
      id: lastTaskId + 1,
      titulo: title,
      concluida: false,
    };

    result.push(newTask);
    res.status(201).send({
      message: "New task created.",
      newTask,
    });
  }

  update(req: express.Request, res: express.Response) {
    const { id, title, check } = req.body;

    const result: Task[] = tasks;
    if (!result) {
      return res.status(404).send({ message: "No tasks found." });
    }

    const currentTask: Task = result.find((e) => e.id === id);
    if (!currentTask) {
      return res.status(400).send({ message: "Task not found." });
    }

    const index = result.indexOf(currentTask);

    if (title) {
      result[index].titulo = title;
    }

    if (check) {
      result[index].concluida = check;
    }

    res.status(204).send({
      messsage: "Task updated.",
      currentTask,
    });
  }

  delete(req: express.Request, res: express.Response) {
    const { id } = req.body;

    const result: Task[] = tasks;
    if (!result) {
      return res.status(404).send({ message: "No tasks found." });
    }

    const currentTask: Task = result.find((e) => e.id === id);
    if (!currentTask) {
      return res.status(400).send({ message: "Task not found." });
    }

    const index = result.indexOf(currentTask);

    result.splice(index, 1);

    return res.status(200).send({ removedTask: currentTask });
  }
}
