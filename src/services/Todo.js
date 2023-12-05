import axios from "axios";

const createTask = async (todo) => {
  return await axios.post(`http://localhost:8080/api/v1/tasks`, todo);
};

const getTasks = async () => {
  return await axios.get(`http://localhost:8080/api/v1/tasks`);
};

const getTaskById = async (id) => {
  return await axios.get(`http://localhost:8080/api/v1/tasks/${id}`);
};

const updateTask = async (id, todo) => {
  return await axios.put(`http://localhost:8080/api/v1/tasks/${id}`, todo);
};

const deleteTask = async (id) => {
  return await axios.delete(`http://localhost:8080/api/v1/tasks/${id}`);
};

export default { getTasks, getTaskById, createTask, updateTask, deleteTask };
