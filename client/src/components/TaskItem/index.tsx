import { useState } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import updateTask from "../../services/updateTask";
import deleteTask from "../../services/deleteTask";
import Task from "../../types/task";

type Props = {
  task: Task;
  fetchData: () => Promise<void>;
};

const TaskItem = ({ task, fetchData }: Props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [checked, setChecked] = useState(task.concluida);
  const [editTask, setEditTask] = useState(false);

  async function handleUpdate() {
    await updateTask(task.id, taskTitle, checked);
    await fetchData();

    setEditTask(!editTask);
  }

  async function handleDelete() {
    await deleteTask(task.id);
    await fetchData();
  }

  return (
    <>
      <ListItem
        sx={{ justifyContent: "center" }}
        secondaryAction={
          editTask ? (
            <>
              <IconButton sx={{ mr: 1 }} edge="end" aria-label="edit" onClick={handleUpdate}>
                <CheckCircleIcon color="success" />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                <DeleteForeverIcon color="error" />
              </IconButton>
            </>
          ) : (
            <IconButton edge="end" aria-label="edit" onClick={() => setEditTask(!editTask)}>
              <EditIcon />
            </IconButton>
          )
        }
        disablePadding>
        <ListItemButton sx={{ padding: 2, borderRadius: 1 }} dense divider>
          {editTask ? (
            <Box component="form" noValidate>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked}
                  tabIndex={-1}
                  disableRipple
                  onClick={() => setChecked(!checked)}
                />
              </ListItemIcon>

              <TextField
                label={task.titulo}
                value={taskTitle}
                size="small"
                variant="standard"
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </Box>
          ) : (
            <ListItemText sx={{ textDecoration: checked ? "line-through" : "" }}>
              {task.titulo}
            </ListItemText>
          )}
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default TaskItem;
