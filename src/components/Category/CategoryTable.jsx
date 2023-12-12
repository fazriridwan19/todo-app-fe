import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import ModalFormUpdateCategory from "../modals/ModalFormUpdateCategory";
import CategoryData from "./CategoryData";

const CategoryTable = ({ updateCategory, deleteCategory, categories }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>no</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => {
          return (
            <CategoryData
              key={category.id}
              index={index}
              category={category}
              updateCategory={updateCategory}
              deleteCategory={deleteCategory}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default CategoryTable;
