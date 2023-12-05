import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import ItemTodo from "../components/Todo/ItemTodo";
import ModalForm from "../components/modals/ModalForm";
import service from "../services/Todo";
import categoryService from "../services/Category";

const TodoList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [todos, setTodos] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await categoryService.getCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPriorities = async () => {
    try {
      const { data } = await categoryService.getCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const { data } = await service.getTasks();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (todo) => {
    return await service.createTask(todo);
  };

  const updateTodo = async (id, todo) => {
    return await service.updateTask(id, todo);
  };

  const deleteTask = async (id) => {
    return await service.deleteTask(id);
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  return (
    <Container className="mt-5 w-50">
      <h1 className="text-center mb-4">Todo List</h1>
      <div className="d-flex justify-content-end mb-2">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add task
        </Button>
      </div>
      <ModalForm
        show={modalShow}
        onHide={() => setModalShow(false)}
        addTodo={addTodo}
        reload={getData}
        categories={categories}
      />
      <div>
        {todos.map((todo, index) => (
          <Card>
            <Card.Body>
              <ItemTodo
                key={todo.id}
                index={index}
                todo={todo}
                categories={categories}
                markTodo={updateTodo}
                updateTodo={updateTodo}
                deleteTask={deleteTask}
                reload={getData}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default TodoList;
