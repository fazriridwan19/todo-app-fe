import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const FormCategory = ({ closeModal, addCategory }) => {
  const [category, setCategory] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(category)
      .then((result) => {
        closeModal();
        Swal.fire({
          title: "Category added",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <Form onSubmit={handleSubmit} className="d-grid gap-3">
      <Form.Group>
        <Form.Label>
          <b>Add New Category</b>
        </Form.Label>
      </Form.Group>
      <Form.Control
        required
        type="text"
        className="input"
        placeholder="Add new category"
        onChange={(e) => setCategory({ ...category, name: e.target.value })}
      />
      <Button variant="primary mt-3 mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormCategory;
