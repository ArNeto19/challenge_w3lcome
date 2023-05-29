import api from "./api";

async function deleteTask(id: number) {
  try {
    const response = await api.delete("tasks", { data: { id } });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default deleteTask;
