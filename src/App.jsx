import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Myprofile from './components/Routes/Myprofile';
import Rockets from './components/Routes/Rockets';
import Missions from './components/Routes/Mission';

function App() {
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
