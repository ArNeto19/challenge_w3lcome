import { useEffect, useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";

import TaskItem from "../TaskItem";

import getTasks from "../../services/getTasks";
import postTask from "../../services/postTask";
import Task from "../../types/task";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  async function fetchData() {
    const res = await getTasks();

    if (res) {
      setTasks(res);
    }
  }

  async function handlePost(taskTitle: string) {
    await postTask(taskTitle);
    await fetchData();

    setNewTaskTitle("");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <List sx={{ p: 2, m: 'auto', width: "100%", maxWidth: 360, bgcolor: "#f5f5f5" }}>
      <h2>Task List</h2>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} fetchData={fetchData} />;
      })}
      <ListItem sx={{ justifyContent: "center" }}>
        <TextField
          size="small"
          label="New Task"
          variant="standard"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />{" "}
        <IconButton edge="end" aria-label="edit" onClick={() => handlePost(newTaskTitle)}>
          <AddCircleIcon />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default TaskList;
