import arrowRain from '../assets/icons/arrowRain.svg';
import arrowSnow from '../assets/icons/arrowSnow.svg';
import arrowSun from '../assets/icons/arrowSun.svg';

const setArrow = (condition) => {
  switch (condition) {
    case 'rain':
      return arrowRain;

    case 'snow':
      return arrowSnow;

    default:
      return arrowSun;
  }
};

export default setArrow;
