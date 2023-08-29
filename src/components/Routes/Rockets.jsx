import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRockets } from '../../redux/rocketsSlice';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if rockets data is empty, then fetch and dispatch
    if (rockets.length === 0) {
      fetch('https://api.spacexdata.com/v3/rockets')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setRockets(data));
        });
    }
  }, [rockets, dispatch]);

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
