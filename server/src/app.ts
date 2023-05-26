import express from "express";
import tasks from "./api/api";

const server = express();
const port = 8080;

server.get("/", (req: express.Request, res: express.Response) => {
  res.send({ tasks: tasks });
});

server.listen(port, () => console.log(`Express is listening at http://localhost:${port}`));
