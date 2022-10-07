import { useNavigate } from 'react-router-dom';

function City({ city }) {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate(`/forecast/${city}`)}>
        {city}
      </button>
    </div>
  );
}

export default City;
