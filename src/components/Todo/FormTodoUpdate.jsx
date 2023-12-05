import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const FormTodoUpdate = ({
  todoToUpdate,
  updateTodo,
  closeModal,
  reload,
  categories,
}) => {
  const [todo, setTodo] = useState(todoToUpdate);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    updateTodo(todoToUpdate.id, todo)
      .then(() => {
        closeModal();
        Swal.fire({
          title: "Task updated",
          text: "You clicked the button!",
          icon: "success",
        }).then(async () => {
          try {
            await reload();
          } catch (error) {
            console.log(error);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form onSubmit={handleSubmit} className="d-grid gap-3">
      <Form.Group>
        <Form.Label>
          <b>Add Task</b>
        </Form.Label>
      </Form.Group>
      <Form.Control
        type="text"
        className="input"
        placeholder="Add new task"
        value={todo.text}
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
      />
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setTodo({ ...todo, priority: { id: e.target.value } })}
      >
        <option selected={todo.priority.id === 1} value="1">
          Low
        </option>
        <option selected={todo.priority.id === 2} value="2">
          Medium
        </option>
        <option selected={todo.priority.id === 3} value="3">
          High
        </option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setTodo({ ...todo, category: { id: e.target.value } })}
      >
        {categories.map((category) => (
          <option
            selected={todo.category.id === category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setTodo({ ...todo, isDone: e.target.value })}
      >
        <option>Condition</option>
        <option selected={todo.isDone} value={true}>
          Finish
        </option>
        <option selected={!todo.isDone} value={false}>
          Not Finish
        </option>
      </Form.Select>
      <Button variant="primary mt-3 mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormTodoUpdate;
