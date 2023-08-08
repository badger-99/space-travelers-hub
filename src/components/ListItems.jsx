import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/store';

const ListItems = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((state) => state.missions);
  useEffect(() => {
    if (missionsData.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missionsData]);

  return (
    <div>
      Hi
    </div>
  );
};

export default ListItems;
