import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppContext } from "../AppContext";

const AddTodoForm = () => {
  const { selectedDate, handelAddTodo } = useAppContext();

  const [todoTxt, setTodoTxt] = useState("");
  const [time, setTime] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    handelAddTodo(todoTxt, make12hr(time));
    setTodoTxt("");
    setTime("");
  };

  const make12hr = (time) => {
    const timeString12hr = new Date(
      "1970-01-01T" + time + "Z"
    ).toLocaleTimeString(
      {},
      { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
    );
    return timeString12hr;
  };

  return (
    <Form className="card card-body" onSubmit={onSubmit}>
      <h4>Add Todo For {selectedDate.toDateString()} </h4>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Enter Todo Text</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Todo Text"
          value={todoTxt}
          onChange={(e) => setTodoTxt(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Select Time</Form.Label>
        <Form.Control
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Add Todo
      </Button>
    </Form>
  );
};

export default AddTodoForm;
