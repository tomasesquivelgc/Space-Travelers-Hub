import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import planet from '../images/planet.png';

const Navbar = () => (
  <nav id="nav">
    <div className="logo_title_container">
      <img className="logo" src={planet} alt="logo" />
      <h3 className="fontW400 margin0">Space Travelers&apos; Hub</h3>
    </div>

    <div>
      <ul className="desktopShow NavBar_ul">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : ' ')}
            to="/"
          >
            {' '}
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/Missions">Missions</NavLink>
        </li>
        <li className="profileLi">
          <div className="spearator" />
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : ' ')}
            to="/Profile"
          >
            {' '}
            Profile
            {' '}
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
