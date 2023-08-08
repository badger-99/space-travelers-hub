import PropTypes from 'prop-types';

const Rocket = ({
  id, name, description, image,
}) => (
  <div className="rocket flexRow">
    <div className="rocketPic">
      <img src={image} alt={name} />
    </div>
    <div className="details flexCol">
      <h4>{name}</h4>
      <p>{description}</p>
      <button type="button" id={id}>
        Reserve Rocket
      </button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Rocket;
