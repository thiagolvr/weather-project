import City from '../../components/City/City';
import wordIcon from '../../assets/icons/word-icon.png';
import * as S from './style';
import { CITIES } from '../../utils/constants';

function Home() {
  return (
    <S.HomeContainer>
      <S.HomeContent>
        <header>
          <h1>Weather</h1>
          <p>select a city</p>
        </header>
        <main>
          <img src={wordIcon} alt="word icon for home" />
          <div>
            {CITIES.map((city) => (
              <City key={city} city={city} />
            ))}
          </div>
        </main>
      </S.HomeContent>
    </S.HomeContainer>
  );
}

export default Home;
