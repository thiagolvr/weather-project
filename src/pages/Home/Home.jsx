import City from '../../components/City/City';
import wordIcon from '../../assets/imgs/word-icon.png';
import './Home.scss';

function Home() {
  const cities = ['Dallol', 'Fairbanks', 'London', 'Recife', 'Vancouver', 'Yakutsk'];

  return (
    <div className="home-container">
      <div className="home-content">
        <header>
          <h1 className="home__title">Weather</h1>
          <p className="home__label">select a city</p>
        </header>
        <main>
          <img className="home__img" src={wordIcon} alt="word icon" />
          <div className="home__cities">
            { cities?.map((city) => (<City key={city} city={city} />))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
