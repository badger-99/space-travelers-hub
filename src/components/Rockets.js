import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const {
    rocketArray, isLoading, error,
  } = useSelector((store) => store.rockets);

  if (isLoading) {
    return <h1 id="loading">Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section>
      {rocketArray.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
        />
      ))}
    </section>
  );
};

export default Rockets;
