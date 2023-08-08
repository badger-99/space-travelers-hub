import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchMissions } from '../redux/store';

const ListItems = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  return (
    <>
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
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>Table cell</td>
              <td>Table cell</td>

            </tr>
          ))}

        </tbody>
      </Table>
    </>
  );
};

export default ListItems;
