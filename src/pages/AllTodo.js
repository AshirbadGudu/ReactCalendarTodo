import React, { useEffect, useState } from "react";
import { Badge, Button, Container, ListGroup } from "react-bootstrap";
import { useAppContext } from "../AppContext";
import EditTodoModal from "../components/EditTodoModal";

const AllTodo = () => {
  const { allTodo, make12hr, handelClearAll, deleteTodo } = useAppContext();
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
      <EditTodoModal
        selectedTodoTxt={selectedTodoTxt}
        setSelectedTodoTxt={setSelectedTodoTxt}
        selectedTodoTime={selectedTodoTime}
        setSelectedTodoTime={setSelectedTodoTime}
        selectedTodo={selectedTodo}
        showModal={show}
        handleClose={handleClose}
      />
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
