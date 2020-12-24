import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useAppContext } from "../AppContext";
const EditTodoModal = ({
  showModal,
  handleClose,
  selectedTodoTxt,
  setSelectedTodoTxt,
  selectedTodoTime,
  setSelectedTodoTime,
  selectedTodo,
}) => {
  const { handleChanges } = useAppContext();

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
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
    </>
  );
};

export default EditTodoModal;
