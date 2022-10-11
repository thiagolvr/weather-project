import * as PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CityCardContainer from './style';

function City({ city }) {
  const navigate = useNavigate();

  return (
    <CityCardContainer onClick={() => navigate(`/forecast/${city}`)}>
      {city}
    </CityCardContainer>
  );
}

City.propTypes = {
  city: PropTypes.string.isRequired,
};

export default City;
