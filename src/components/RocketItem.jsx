import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rocketsSlice';

function RocketItem({ rocket }) {
  const dispatch = useDispatch();

  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId))
  };

  const handleCancelRocket = (rocketId) => {
    dispatch(cancelRocket(rocketId));
  }

  return (
    <li>
      <Container fluid>
        <Row>
          <Col md={4} sm={5} lg={3}>
            <Image src={rocket.flickr_images[0]} alt={rocket.rocket_name} fluid />
          </Col>
          <Col>
            <h3>{rocket.rocket_name}</h3>
            <p>{rocket.description}</p>
            <p>
              Engine Type:&nbsp;
              {rocket.engines.type}
            </p>
            <Button
              type="button"
              style={{ width: '160px' }}
              variant="primary"
              onClick={() => handleReserveRocket(rocket.id)}
            >
              Reserve Rocket
            </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    engines: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketItem;
