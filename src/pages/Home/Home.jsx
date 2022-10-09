import City from '../../components/City/City';
import wordIcon from '../../assets/icons/word-icon.png';
import * as S from './style';

function Home() {
  const cities = [
    'Dallol',
    'Fairbanks',
    'London',
    'Recife',
    'Vancouver',
    'Yakutsk',
  ];

  return (
    <S.HomeContainer>
      <S.HomeContent>
        <header>
          <h1>Weather</h1>
          <p>select a city</p>
        </header>
        <main>
          <img className="home__img" src={wordIcon} alt="word icon" />
          <div className="home__cities">
            {cities?.map((city) => (
              <City key={city} city={city} />
            ))}
          </div>
        </main>
      </S.HomeContent>
    </S.HomeContainer>
  );
}

export default Home;
