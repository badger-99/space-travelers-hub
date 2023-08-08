import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rocketArray } = useSelector((store) => store.rockets);
  const reservedRockets = rocketArray.filter((rocket) => rocket.isReserved);
  return (
    <div id="my-profile">
      <div id="my-rockets">
        <h2>My Rockets</h2>
        <ul id="reservedRockets">
          {reservedRockets.map((rocket) => (<li key={rocket.id}>{rocket.name}</li>))}
        </ul>
      </div>
    </div>
  );
};
export default MyProfile;
