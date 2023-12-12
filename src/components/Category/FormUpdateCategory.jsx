import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const FormUpdateCategory = ({
  closeModal,
  updateCategory,
  categoryToUpdate,
}) => {
  const [category, setCategory] = useState(categoryToUpdate);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(category).then((result) => {
      closeModal();
      Swal.fire({
        title: "Category updated",
        text: "You clicked the button!",
        icon: "success",
      });
    });
  };
  return (
    <Form onSubmit={handleSubmit} className="d-grid gap-3">
      <Form.Group>
        <Form.Label>
          <b>Update Category</b>
        </Form.Label>
      </Form.Group>
      <Form.Control
        type="text"
        className="input"
        placeholder="Update category"
        value={category.name}
        onChange={(e) => setCategory({ ...category, name: e.target.value })}
      />
      <Button variant="primary mt-3 mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormUpdateCategory;
