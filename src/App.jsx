import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Myprofile from './components/Routes/Myprofile';
import Rockets from './components/Routes/Rockets';

function App() {
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
