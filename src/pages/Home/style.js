import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #0F0F0F;
  padding: 0 20px;

`;

export const HomeContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 375px;

    text-align: center;

    h1 {
      font-family: "Poppins", sans-serif;
      color:  #FFFFFF;
      font-weight: 200;
      font-size: 2.5rem;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    p {
      font-family: "Poppins", sans-serif;
      font-weight: 100;
      font-size: 1.5rem;
      color:#CECECE;
      letter-spacing: 2px;
      margin-top: -10px;
    }

    img {
      margin-top: 2rem;
      width: 40%;
      margin-bottom: 5px;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 2rem;
      gap: 2rem;
    }

     `;
