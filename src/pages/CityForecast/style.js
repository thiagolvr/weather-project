import styled, { css } from 'styled-components';

const background = {
  sun: css`
    background: rgb(87, 202, 219);
    background: linear-gradient(
      194deg,
      rgba(87, 202, 219, 1) 0%,
      rgba(8, 155, 193, 1) 100%
    );
    color: white;
  `,
  rain: css`
    background: rgb(97, 105, 120);
    background: linear-gradient(
      180deg,
      rgba(97, 105, 120, 1) 0%,
      rgba(60, 67, 83, 1) 100%
    );
    color: white;
  `,
  snow: css`
    background: rgb(224, 224, 224);
    background: linear-gradient(
      180deg,
      rgba(224, 224, 224, 1) 0%,
      rgba(162, 162, 162, 1) 100%
    );
  `,
  default: css`
    background: rgb(87, 202, 219);
    background: linear-gradient(
      194deg,
      rgba(87, 202, 219, 1) 0%,
      rgba(68, 175, 193, 1) 100%
    );
  `,
};

export const ForecastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  ${({ weather }) => background[weather]};
  padding: 0 20px;
`;

export const ForecastContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 375px;

  text-align: center;
`;

export const MainIcon = styled.div`
  margin-bottom: 40px;

  img {
    margin-top: 40px;
    width: 130px;
    height: 130px;
  }
`;

export const Title = styled.div`
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.5em;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    text-transform: lowercase;
    letter-spacing: 2px;
    margin-bottom: 30px;
    margin-top: -5px;
  }
`;

export const TemperatureContainer = styled.div`
  display: flex;
  margin-bottom: -20px;

  span {
    font-size: 7em;
    line-height: 80px;
    font-family: "Poppins", sans-serif;
  }

  section {
    display: flex;
    flex-direction: column;

    p {
      font-size: 2em;
      line-height: 20px;
    }
  }

  div {
    margin-left: 20px;
    font-size: 1.5em;
    line-height: 20px;
    font-family: "Nanum Gothic", sans-serif;
  }
`;

export const TemperatureInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 0.5em;
  align-self: baseline;

  img {
    width: 15px;
    height: 15px;
    margin-right: 15px;
  }

  .reverse {
    transform: rotate(180deg);
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
    font-weight: 100;
  }
`;

export const ForecastList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  p {
    font-family: "Poppins", sans-serif;
    font-size: small;
    color: ${({ weather }) => (weather === 'snow' ? '#3d3d3d' : '#ebf6f8')};
    margin-bottom: 10px;
    letter-spacing: 1px;

  }

  span:nth-child(1) {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    margin-right: 3px;
  }

  span {
    font-family: "Nanum Gothic", sans-serif;
    font-size: 1.1em;
  }
`;

export const ForecastMoreInfo = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: center;
  align-items: center;

  p,
  span {
    font-family: "Poppins", sans-serif;
    font-size: small;
  }

  p {
    color: ${({ weather }) => (weather === 'snow' ? '#5e5e5e' : '##ebf6f8')};
    font-weight: 200;
    letter-spacing: 1px;
    margin-bottom: 5px;
  }

  span {
    font-weight: 200;
    letter-spacing: 1px;
  }


  hr {
    height: 25px;
    border-color: ${({ weather }) => {
    switch (weather) {
      case 'snow':
        return '#a9a9a930';

      case 'rain':
        return '#ebf6f810';

      default:
        return '#ebf6f860';
    }
  }};
  }

  .first {
    margin-left: 10px;
  }

  div {
    display: flex;
    min-width: 80px;
    flex-direction: column;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  color: ${({ weather }) => (weather === 'snow' ? '#5e5e5e' : '##ebf6f8')};

  img {
    width: 30px;
    height: 30px;
    ${({ weather }) => (weather === 'snow' ? css`
      filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7178%) hue-rotate(73deg) brightness(95%) contrast(104%);
    ` : css`
      filter:  brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(317deg) brightness(103%) contrast(102%);
    `)};
  }
`;
