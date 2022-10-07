import City from '../components/City';
import wordIcon from '../assets/imgs/word-icon.png';

function Home() {
  const cities = ['Dallol', 'Fairbanks', 'London', 'Recife', 'Vancouver', 'Yakutsk'];

  return (
    <div>
      <header>
        <h1>Weather</h1>
        <p>Select a city</p>
      </header>
      <main>
        <img src={wordIcon} alt="word icon" />
        {
          cities.map((city) => (
            <City key={city} city={city} />
          ))
        }
      </main>
    </div>
  );
}

export default Home;
