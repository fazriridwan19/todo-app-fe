import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalFormUpdateCategory from "../modals/ModalFormUpdateCategory";
import Swal from "sweetalert2";

const CategoryData = ({ index, category, updateCategory, deleteCategory }) => {
  const [modalShow, setModalShow] = useState(false);
  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteCategory(id).then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category.name}</td>
      <td>
        <Button
          title="Edit"
          variant="outline-warning"
          onClick={() => setModalShow(true)}
        >
          ✏️
        </Button>{" "}
        <ModalFormUpdateCategory
          show={modalShow}
          onHide={() => setModalShow(false)}
          category={category}
          updateCategory={updateCategory}
        />
        <Button
          variant="outline-danger"
          title="Delete"
          onClick={() => handleDelete(category.id)}
        >
          🗑️
        </Button>
      </td>
    </tr>
  );
};

export default CategoryData;
