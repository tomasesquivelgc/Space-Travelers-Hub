import {
  Col, Row, Container, ListGroup,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Myprofile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <Container>
      <Row>
        <Col>
          <h3>My Missions</h3>
        </Col>
        <Col>
          <h3>My rockets</h3>
          <ListGroup>
            {reservedRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Myprofile;
