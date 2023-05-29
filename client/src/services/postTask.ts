import api from "./api";

async function postTask(title: string) {
  try {
    const response = await api.post("/tasks", { title });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default postTask;
