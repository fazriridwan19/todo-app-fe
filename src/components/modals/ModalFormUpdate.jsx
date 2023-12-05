import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormTodoUpdate from "../Todo/FormTodoUpdate";

const ModalFormUpdate = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Form task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormTodoUpdate
          updateTodo={props.updateTodo}
          closeModal={props.onHide}
          reload={props.reload}
          todoToUpdate={props.todo}
          categories={props.categories}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormUpdate;
