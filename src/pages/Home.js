import { useAppContext } from "AppContext";
import { AddTodoForm } from "components";
import { Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";

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
    </Container>
  );
};

export default Home;
