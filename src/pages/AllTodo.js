import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useAppContext } from "../AppContext";
import EditTodoModal from "../components/EditTodoModal";
import TodoList from "../components/TodoList";

const AllTodo = () => {
  const { handelClearAll, deleteTodo, allTodoArr } = useAppContext();

  const [selectedTodoTxt, setSelectedTodoTxt] = useState("");
  const [selectedTodoTime, setSelectedTodoTime] = useState("");
  const [selectedTodo, setSelectedTodo] = useState({});

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
      <TodoList
        arr={allTodoArr}
        handelClearAll={handelClearAll}
        handelEdit={editTodo}
        handelDelete={deleteTodo}
      />
    </Container>
  );
};

export default AllTodo;
