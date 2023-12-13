import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Pagination,
  Row,
} from "react-bootstrap";
import ItemTodo from "../components/Todo/ItemTodo";
import ModalForm from "../components/modals/ModalForm";
import service from "../services/Todo";
import categoryService from "../services/Category";

const TodoList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState(null);
  const [pagination, setPagination] = useState(null);
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

  const getData = async () => {
    try {
      const { data } = await service.getTasks(filterCriteria);
      setPagination({
        first: data.first,
        last: data.last,
        page: data.number,
        size: data.size,
        totalPages: data.totalPages,
      });
      setTodos(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (todo) => {
    try {
      await service.createTask(todo);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (id, todo) => {
    try {
      await service.updateTask(id, todo);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await service.deleteTask(id);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  useEffect(() => {
    getData();
  }, [filterCriteria]);

  return (
    <Container className="mt-2 w-80">
      <h1 className="text-center mb-2">Todo List</h1>
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
      <div className="d-flex justify-content-center gap-2">
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            setFilterCriteria({
              ...filterCriteria,
              categoryId: e.target.value,
            });
          }}
        >
          <option selected disabled value={""}>
            Categories
          </option>
          <option value={""}>All</option>
          {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            setFilterCriteria({
              ...filterCriteria,
              priorityId: e.target.value,
            });
          }}
        >
          <option selected disabled value={""}>
            Priorities
          </option>
          <option value={""}>All</option>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            setFilterCriteria({
              ...filterCriteria,
              isDone: e.target.value,
            });
          }}
        >
          <option selected disabled value={""}>
            Status
          </option>
          <option value={""}>All</option>
          <option value={true}>Finish</option>
          <option value={false}>Not Finish</option>
        </Form.Select>
      </div>
      <div className="mt-2">
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
      <Pagination className="mt-2 d-flex justify-content-center">
        <Pagination.First
          onClick={() =>
            setFilterCriteria({
              ...filterCriteria,
              page: 0,
            })
          }
        />
        <Pagination.Prev
          onClick={() =>
            setFilterCriteria({
              ...filterCriteria,
              page: pagination.page === 0 ? 0 : pagination.page - 1,
            })
          }
        />
        {Array.from(Array(pagination?.totalPages).keys()).map(
          (value, index) => (
            <Pagination.Item
              onClick={() =>
                setFilterCriteria({
                  ...filterCriteria,
                  page: value,
                })
              }
              active={pagination?.page === value}
            >
              {value + 1}
            </Pagination.Item>
          )
        )}
        <Pagination.Next
          onClick={() =>
            setFilterCriteria({
              ...filterCriteria,
              page: pagination.last ? pagination.page : pagination.page + 1,
            })
          }
        />
        <Pagination.Last
          onClick={() =>
            setFilterCriteria({
              ...filterCriteria,
              page: pagination.totalPages - 1,
            })
          }
        />
      </Pagination>
    </Container>
  );
};

export default TodoList;
