import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormTodo from "../Todo/FormTodo";

const ModalForm = (props) => {
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
        <FormTodo
          addTodo={props.addTodo}
          closeModal={props.onHide}
          reload={props.reload}
          categories={props.categories}
          priorities={props.priorities}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
