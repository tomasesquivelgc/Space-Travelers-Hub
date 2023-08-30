import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function RocketItem({ rocket }) {
  return (
    <li>
      <Container fluid>
        <Row>
          <Col md={3}><Image src={rocket.flickr_images[0]} alt={rocket.rocket_name} fluid/></Col>
          <Col>
            <h3>{rocket.rocket_name}</h3>
            <p>{rocket.description}</p>
            <p>
              Engine Type:
              {rocket.engines.type}
            </p>
            <Button
              type="button"
              style={{ width: '160px' }}
              variant="primary"
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
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    engines: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RocketItem;
