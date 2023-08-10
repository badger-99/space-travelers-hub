import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => {
    const reservedMissions = state.missions.filter((mission) => mission.reserved === true);
    return reservedMissions;
  });
  const reservedMissions = useMemo(() => missions.filter((mission) => mission.reserved), [missions]);

  const { rocketArray } = useSelector((store) => store.rockets);
  const reservedRockets = rocketArray.filter((rocket) => rocket.isReserved);

  return (
    <section id="my-profile" className="flexRow">
      <div id="mission-name">
        <h2>Mission Name</h2>
        <ul className="reservationDetails">
          {reservedMissions.length > 0 ? (
            reservedMissions.map((mission) => (
              <li key={mission.mission_id}>
                {mission.mission_name}
              </li>
            ))
          ) : (
            <li>
              No reserved missions
            </li>
          )}
        </ul>
      </div>
      <div id="my-rockets">
        <h2>My Rockets</h2>
        <ul className="reservationDetails">
          {reservedRockets.map((rocket) => (<li key={rocket.id}>{rocket.name}</li>))}
        </ul>
      </div>
    </section>
  );
};
export default MyProfile;
