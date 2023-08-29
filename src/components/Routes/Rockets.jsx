import { useSelector } from 'react-redux';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      <h2>Rockets</h2>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <h3>{rocket.rocket_name}</h3>
            <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            <p>
              Engine Type:
              {rocket.engines.type}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
