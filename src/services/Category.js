import axios from "axios";

const createCategory = async (todo) => {
  return await axios.post(`http://localhost:8080/api/v1/categories`, todo);
};

const getCategories = async () => {
  return await axios.get(`http://localhost:8080/api/v1/categories`);
};

const getCategoryById = async (id) => {
  return await axios.get(`http://localhost:8080/api/v1/categories/${id}`);
};

const updateCategory = async (id, todo) => {
  return await axios.put(`http://localhost:8080/api/v1/categories/${id}`, todo);
};

const deleteCategory = async (id) => {
  return await axios.delete(`http://localhost:8080/api/v1/categories/${id}`);
};

export default {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
