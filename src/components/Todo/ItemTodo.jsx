import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import ModalFormUpdate from "../modals/ModalFormUpdate";

const ItemTodo = ({ todo, markTodo, deleteTask, updateTodo, categories }) => {
  const [modalShow, setModalShow] = useState(false);
  let bgBadge;
  if (todo.priority.name === "high") {
    bgBadge = "bg-danger";
  } else if (todo.priority.name === "medium") {
    bgBadge = "bg-warning";
  } else {
    bgBadge = "bg-success";
  }
  const handleMark = async (id) => {
    try {
      todo.isDone = true;
      await markTodo(id, todo);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row>
      <Col md="8">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.text}
        </span>{" "}
        <span className={`badge rounded-pill ${bgBadge}`}>
          {todo.priority.name} priority
        </span>
      </Col>
      <Col md="4" className="d-flex justify-content-end">
        <div>
          <Button
            hidden={todo.isDone}
            variant="outline-success"
            onClick={() => handleMark(todo.id)}
            title="Done"
          >
            🗸
          </Button>{" "}
          <Button
            title="Edit"
            variant="outline-warning"
            onClick={() => setModalShow(true)}
          >
            ✏️
          </Button>{" "}
          <ModalFormUpdate
            show={modalShow}
            onHide={() => setModalShow(false)}
            updateTodo={updateTodo}
            todo={todo}
            categories={categories}
          />
          <Button
            variant="outline-danger"
            onClick={() => handleDelete(todo.id)}
            title="Delete"
          >
            🗑️
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default ItemTodo;
