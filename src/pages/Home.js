import React, { useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import Calendar from "react-calendar";

const Home = () => {
  const [value, onChange] = useState(new Date());
  const [todoTxt, setTodoTxt] = useState("");
  const [time, setTime] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = todoArr;
    const newTodoItem = { todoTxt, time, value };
    arr.push(newTodoItem);
    setTodoArr(arr);
    setTodoTxt("");
    setTime("");
  };
  return (
    <Container className="py-4">
      <h2 className="text-center">React Calendar Todo App</h2>
      <Row className="py-4">
        <Col xs={12} md={4}>
          <Calendar className="card" onChange={onChange} value={value} />
        </Col>
        <Col xs={12} md={8}>
          <Form className="card card-body" onSubmit={(e) => handleSubmit(e)}>
            <h4>Add Todo For {value.toDateString()} </h4>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter Todo Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Todo Text"
                value={todoTxt}
                onChange={(e) => setTodoTxt(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Select Time</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Add Todo
            </Button>
          </Form>
        </Col>
      </Row>
      <ListGroup>
        <ListGroup.Item
          active
          className="d-flex justify-content-between align-items-center"
        >
          Todos For {value.toDateString()}
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
    </Container>
  );
};

export default Home;
