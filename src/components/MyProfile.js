import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => {
    const reservedMissions = state.missions.filter((mission) => mission.reserved === true);
    return reservedMissions;
  });
  const reservedMissions = useMemo(() => missions.filter((mission) => mission.reserved), [missions]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
          </tr>
        </thead>
        <tbody>
          {reservedMissions.length > 0 ? (
            reservedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No reserved missions</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default MyProfile;
