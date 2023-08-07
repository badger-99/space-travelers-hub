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

  if (isLoading) {
    return <h1 id="loading">Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  console.log(rocketArray);

  return (
    <h1>Rockets</h1>
  );
};

export default Rockets;
