import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navigation = () => {
  const heading = "Space Traveler's Hub";
  return (
    <nav className="flexRow">
      <img src={logo} alt="planet logo" />
      <h1>{heading}</h1>
      <ul className="navLinks flexRow">
        <li>
          <NavLink className="link" to="/"> Rockets</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/missions"> Missions</NavLink>
        </li>
        <li>
          <NavLink className="link" id="profile" to="/my_profile"> My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
