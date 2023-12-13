import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import CategoryTable from "../components/Category/CategoryTable";
import categoryService from "../services/Category";
import ModalFormAddCategory from "../components/modals/ModalFormAddCategory";

const Category = () => {
  const [modalShow, setModalShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await categoryService.getCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  const addCategory = async (category) => {
    try {
      const { data } = await categoryService.createCategory(category);
      setCategories([...categories, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const updateCategory = async (category) => {
    try {
      await categoryService.updateCategory(category.id, category);
      getCategories();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCategory = async (id) => {
    try {
      await categoryService.deleteCategory(id);
      getCategories();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Container className="mt-2 w-80">
      <h1 className="text-center mb-2">List Category</h1>
      <div className="d-flex justify-content-end mb-2">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add category
        </Button>
      </div>
      <ModalFormAddCategory
        show={modalShow}
        onHide={() => setModalShow(false)}
        addCategory={addCategory}
        reload={getCategories}
      />
      <CategoryTable
        categories={categories}
        updateCategory={updateCategory}
        deleteCategory={deleteCategory}
      />
    </Container>
  );
};

export default Category;
