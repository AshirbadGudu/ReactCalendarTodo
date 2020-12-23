import React from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";
import { useAppContext } from "../AppContext";

const TodoList = () => {
  const { selectedDate, todoArr } = useAppContext();
  return (
    <ListGroup>
      <ListGroup.Item
        active
        className="d-flex justify-content-between align-items-center"
      >
        Todos For {selectedDate.toDateString()}
        <Button variant="outline-light">
          Sort by time
          <i className="fas fa-sort ml-1"></i>
        </Button>
      </ListGroup.Item>
      {todoArr.map((item, i) => (
        <ListGroup.Item
          key={i}
          className="d-flex justify-content-between align-items-center"
        >
          {item.todoTxt}
          <div>
            <Badge>{item.time}</Badge>
            <Button variant="info" className="mx-2">
              <i className="fas fa-edit"></i>
            </Button>
            <Button variant="danger">
              <i className="fas fa-trash"></i>
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;