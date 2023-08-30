import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRockets } from '../../redux/rocketsSlice';
import RocketItem from '../RocketItem';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
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
          <RocketItem key={rocket.id} rocket={rocket} />
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
