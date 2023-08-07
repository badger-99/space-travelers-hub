import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const {
    rocketArray, isLoading, error,
  } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <h1>Rockets</h1>
  );
};

export default Rockets;
