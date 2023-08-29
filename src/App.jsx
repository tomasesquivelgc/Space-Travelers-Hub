import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Myprofile from './components/Routes/Myprofile';
import Rockets from './components/Routes/Rockets';
import Missions from './components/Routes/Mission';
import { setRockets } from './redux/rocketsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch data from API and dispatch to Redux store
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setRockets(data));
      });
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Myprofile />} />
      </Routes>
    </>
  );
}

export default App;
