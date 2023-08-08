import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReservation } from '../redux/rockets/rocketSlice';

const Rocket = ({
  id, name, description, image, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="rocket flexRow">
      <div className="rocketPic">
        <img src={image} alt={name} />
      </div>
      <div className="details flexCol">
        <h4>{name}</h4>
        <p>{description}</p>
        <button className={reserved ? 'cancelBtn' : 'reserveBtn'} type="button" id={id} onClick={() => dispatch(toggleReservation(id))}>
          <span>{ reserved ? 'Cancel  Reservation' : 'Reserve Rocket' }</span>
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Rocket;
