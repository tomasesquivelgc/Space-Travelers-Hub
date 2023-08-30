import PropTypes from 'prop-types';

function RocketItem({ rocket }) {
  return (
    <li>
      <h3>{rocket.rocket_name}</h3>
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <p>
        Engine Type:
        {rocket.engines.type}
      </p>
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
