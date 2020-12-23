import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import { useAppContext } from "../AppContext";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  const { selectedDate, setSelectedDate } = useAppContext();
  return (
    <Container className="py-4">
      <Row className="py-4">
        <Col xs={12} md={4}>
          <Calendar
            className="card"
            onChange={setSelectedDate}
            value={selectedDate}
          />
        </Col>
        <Col xs={12} md={8}>
          <AddTodoForm />
        </Col>
      </Row>
      <TodoList />
    </Container>
  );
};

export default Home;
