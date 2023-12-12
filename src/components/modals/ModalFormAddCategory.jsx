import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormCategory from "../Category/FormCategory";

const ModalFormAddCategory = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form Add Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormCategory
          addCategory={props.addCategory}
          closeModal={props.onHide}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormAddCategory;
