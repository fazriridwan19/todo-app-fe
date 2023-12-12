import axios from "axios";

const createCategory = async (category) => {
  return await axios.post(`http://localhost:8080/api/v1/categories`, category);
};

const getCategories = async () => {
  return await axios.get(`http://localhost:8080/api/v1/categories`);
};

const getCategoryById = async (id) => {
  return await axios.get(`http://localhost:8080/api/v1/categories/${id}`);
};

const updateCategory = async (id, category) => {
  return await axios.put(
    `http://localhost:8080/api/v1/categories/${id}`,
    category
  );
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
