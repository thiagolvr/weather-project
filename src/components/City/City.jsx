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

export default City;
