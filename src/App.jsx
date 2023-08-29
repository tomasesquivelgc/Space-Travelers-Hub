import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Myprofile from './components/Routes/Myprofile';
import Rockets from './components/Routes/Rockets';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="Missions" />
        <Route path="/Profile" element={<Myprofile />} />
      </Routes>
    </>
  );
}

export default App;
