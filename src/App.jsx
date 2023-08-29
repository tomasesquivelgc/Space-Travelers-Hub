import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Myprofile from './components/Routes/Myprofile';
import Rockets from './components/Routes/Rockets';
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
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Profile" element={<Myprofile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </Router>
  );
}

export default App;
