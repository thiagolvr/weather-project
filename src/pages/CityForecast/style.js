import styled, { css } from 'styled-components';

const background = {
  sun: css`
    background: rgb(87, 202, 219);
    background: linear-gradient(
      194deg,
      rgba(87, 202, 219, 1) 0%,
      rgba(68, 175, 193, 1) 100%
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
  margin-bottom: 20px;

  img {
    margin-top: 30px;
    width: 180px;
    height: 180px;

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
  }
`;

export const TemperatureContainer = styled.div`
  display: flex;
  margin-bottom: -20px;

  span {
    font-size: 7em;
    line-height: 80px;
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
    font-size: 2em;
    line-height: 20px;
    font-family: "Montserrat", sans-serif;

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
  gap: 1.5rem;

  p {
    font-family: "Poppins", sans-serif;
    font-size: small;
    color: ${({ weather }) => (weather === 'sun' || weather === 'rain' ? '#ebf6f8' : '#3d3d3d')};
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
    color: ${({ weather }) => (weather === 'sun' || weather === 'rain' ? '##ebf6f8' : '#5e5e5e')};
    font-weight: 200;

  }

  span {
    font-weight: 200;
  }

  div {
    display: flex;
    min-width: 80px;
    flex-direction: column;
  }
`;
