import { useNavigate } from 'react-router-dom';
import './City.scss';

function City({ city }) {
  const navigate = useNavigate();

  return (
    <button className="city__card" type="button" onClick={() => navigate(`/forecast/${city}`)}>
      {city}
    </button>
  );
}

export default City;
