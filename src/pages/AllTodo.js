import React, { useEffect, useState } from "react";
import { Badge, Button, Container, ListGroup } from "react-bootstrap";
import { useAppContext } from "../AppContext";

const AllTodo = () => {
  const { state, setState } = useAppContext();
  const [allTodoArr, setAllTodoArr] = useState([]);
  useEffect(() => {
    const arr = [];
    for (const date in state) {
      for (const key in state[date]) {
        arr.push({ date, ...state[date][key], key });
      }
    }
    setAllTodoArr(arr);
  }, [state]);

  const handelClearAll = () => {
    setState({});
  };
  const handelSort = () => {};

  const deleteTodo = (todo) => {
    const newState = { ...state };
    newState[todo.date].splice([todo.key], 1);
    setState(newState);
  };

  return (
    <Container className="py-4">
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
            <Button
              className="mx-1"
              variant="success"
              onClick={() => handelSort()}
            >
              Sort Now
              <i className="fas fa-sort ml-1"></i>
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
              <small>{todo.time}</small>
            </span>
            <div>
              <Badge>{todo.date}</Badge>
              <Button variant="danger" onClick={() => deleteTodo(todo)}>
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
