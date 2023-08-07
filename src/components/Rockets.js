import { useDispatch, useSelector } from 'react-redux';
const Rockets = () => {
  const {
    rocketArray, isLoading, error,
  } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  return (
    <h1>Rockets</h1>
  );
};

export default Rockets;
