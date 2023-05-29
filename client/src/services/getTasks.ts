import api from "./api";

async function getTasks() {
  try {
    const response = await api.get("/tasks");

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default getTasks;
