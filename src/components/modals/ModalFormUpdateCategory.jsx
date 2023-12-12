import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormUpdateCategory from "../Category/FormUpdateCategory";

const ModalFormUpdateCategory = (props) => {
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
          Form Update Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormUpdateCategory
          updateCategory={props.updateCategory}
          closeModal={props.onHide}
          categoryToUpdate={props.category}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormUpdateCategory;
