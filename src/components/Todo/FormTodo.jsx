import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const FormTodo = ({ addTodo, closeModal, categories }) => {
  const [todo, setTodo] = useState({
    text: "",
    priority: {
      id: null,
      name: "",
    },
    category: {
      id: null,
      name: "",
    },
    isDone: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo).then(() => {
      closeModal();
      Swal.fire({
        title: "Task added",
        text: "You clicked the button!",
        icon: "success",
      });
    });
  };
  useEffect(() => {}, []);
  return (
    <Form onSubmit={handleSubmit} className="d-grid gap-3">
      <Form.Group>
        <Form.Label>
          <b>Add Task</b>
        </Form.Label>
      </Form.Group>
      <Form.Control
        required
        type="text"
        className="input"
        placeholder="Add new task"
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
      />
      <Form.Select
        required
        aria-label="Default select example"
        onChange={(e) => setTodo({ ...todo, priority: { id: e.target.value } })}
      >
        <option>Priority</option>
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </Form.Select>
      <Form.Select
        required
        aria-label="Default select example"
        onChange={(e) => setTodo({ ...todo, category: { id: e.target.value } })}
      >
        <option>Category</option>
        {categories.map((category) => (
          <option value={category.id}>{category.name}</option>
        ))}
      </Form.Select>

      <Button variant="primary mt-3 mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormTodo;
