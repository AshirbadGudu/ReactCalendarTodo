import React from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";
import { useAppContext } from "../AppContext";

const TodoList = ({ arr, handelClearAll, handelEdit, handelDelete }) => {
  const { make12hr } = useAppContext();

  return (
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
      {arr.map((todo, i) => (
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
              onClick={() => handelEdit(todo)}
            >
              <i className="fas fa-edit"></i>
            </Button>
            <Button
              className="mx-1"
              variant="danger"
              onClick={() => handelDelete(todo)}
            >
              <i className="fas fa-trash"></i>
            </Button>
          </div>
        </ListGroup.Item>
      ))}
      {!arr.length && (
        <ListGroup.Item className="text-center">
          No Todo Found For Now
        </ListGroup.Item>
      )}
    </ListGroup>
  );
};

export default TodoList;
