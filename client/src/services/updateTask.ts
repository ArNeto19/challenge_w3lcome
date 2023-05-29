import api from "./api";

async function updateTask(id: number, title: string, check: boolean) {
  try {
    const response = await api.patch("/tasks", { id, title, check });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default updateTask;
