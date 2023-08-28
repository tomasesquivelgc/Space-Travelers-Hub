import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import planet from '../images/planet.png';

const NavBar = () => (
  <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand to="/">
        <img
          alt=""
          src={planet}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
        Space Travelers&apos; Hub
      </Navbar.Brand>
      <nav className="me-auto">
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/Missions">Missions</NavLink>
        <NavLink to="/Profile">My Profile</NavLink>
      </nav>
    </Container>
  </Navbar>
);

export default NavBar;
