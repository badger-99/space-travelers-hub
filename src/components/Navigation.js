import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => {
  const heading = "Space Traveler's Hub";
  return (
    <nav className="row">
      <img src={logo} alt="planet logo" style={{ width: '4rem', marginRight: '2rem' }} />
      <h1>{heading}</h1>
      <ul className="navLinks row">
        <li>
          <NavLink className="link" to="/"> placeholder</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/my_profile"> My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
