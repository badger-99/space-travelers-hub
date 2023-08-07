import logo from '../assets/logo.png';

const Navigation = () => {
  const heading = "Space Traveler's Hub";
  return (
    <nav className="row">
      <img src={logo} alt="planet logo" style={{ width: '4rem', marginRight: '2rem' }} />
      <h1>{heading}</h1>
    </nav>
  );
};
export default Navigation;
