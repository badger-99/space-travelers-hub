import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchMissions, joinMission } from '../redux/store';

const ListItems = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  return (
    <section id="missions">
      <Table responsive="xs">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>
              {' '}
              {'  '}
            </th>
          </tr>
        </thead>
        <tbody>

          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <th>{mission.mission_name}</th>
              <td>{mission.description}</td>
              <td>
                {' '}
                <span>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</span>
              </td>
              <td>
                <button
                  type="button"
                  className={mission.reserved ? 'leave-button' : 'join-button'}
                  onClick={() => dispatch(joinMission(mission.mission_id))}
                >
                  {' '}
                  <span>{mission.reserved ? 'Leave Mission' : 'Join Mission'}</span>
                </button>

              </td>

            </tr>
          ))}

        </tbody>
      </Table>
    </section>
  );
};

export default ListItems;
