import PropTypes from 'prop-types';

const MissionShow = ({ mission }) => {
  console.log(mission);
  return (
    <>
      <h4>{mission.mission_name}</h4>
    </>
  );
};

const MissionShape = PropTypes.shape({
  mission_id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

MissionShow.propTypes = {
  mission: MissionShape.isRequired,

};

export default MissionShow;
