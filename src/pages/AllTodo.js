import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Container,
  ListGroup,
  Modal,
  Form,
} from "react-bootstrap";
import { useAppContext } from "../AppContext";

const AllTodo = () => {
  const {
    allTodo,
    make12hr,
    handelClearAll,
    deleteTodo,
    handleChanges,
  } = useAppContext();
  const [allTodoArr, setAllTodoArr] = useState([]);
  const [selectedTodoTxt, setSelectedTodoTxt] = useState("");
  const [selectedTodoTime, setSelectedTodoTime] = useState("");
  const [selectedTodo, setSelectedTodo] = useState({});
  useEffect(() => {
    const arr = [];
    for (const date in allTodo) {
      for (const key in allTodo[date]) {
        arr.push({ date, ...allTodo[date][key], key });
      }
    }
    setAllTodoArr(arr);
  }, [allTodo]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editTodo = (todo) => {
    setSelectedTodoTxt(todo.todoTxt);
    setSelectedTodoTime(todo.time);
    setSelectedTodo(todo);
    handleShow();
  };

  return (
    <Container className="py-4">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="card card-body"
            onSubmit={(e) => {
              e.preventDefault();
              handleChanges(selectedTodo, selectedTodoTxt, selectedTodoTime);
              handleClose();
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter Todo Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Todo Text"
                value={selectedTodoTxt}
                onChange={(e) => setSelectedTodoTxt(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Select Time</Form.Label>
              <Form.Control
                type="time"
                value={selectedTodoTime}
                onChange={(e) => setSelectedTodoTime(e.target.value)}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <ListGroup>
        <ListGroup.Item
          active
          className="d-flex justify-content-between align-items-center"
        >
          All Todo
          <div>
            <Button
              className="mx-1"
              variant="danger"
              onClick={() => handelClearAll()}
            >
              Clear All
              <i className="fas fa-times ml-1"></i>
            </Button>
          </div>
        </ListGroup.Item>
        {allTodoArr.map((todo, i) => (
          <ListGroup.Item
            key={i}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              {todo.todoTxt}
              <br />
              <small>{make12hr(todo.time)}</small>
            </span>
            <div>
              <Badge>{todo.date}</Badge>
              <Button
                className="mx-1"
                variant="info"
                onClick={() => editTodo(todo)}
              >
                <i className="fas fa-edit"></i>
              </Button>
              <Button
                className="mx-1"
                variant="danger"
                onClick={() => deleteTodo(todo)}
              >
                <i className="fas fa-trash"></i>
              </Button>
            </div>
          </ListGroup.Item>
        ))}
        {!allTodoArr.length && (
          <ListGroup.Item className="text-center">
            No Todo Found For Now
          </ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  );
};

export default AllTodo;
