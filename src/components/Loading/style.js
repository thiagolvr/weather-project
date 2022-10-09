import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 50px ;
  height: 50px ;
  border-radius: 50%;
  border-bottom: 3px solid #a9a9a9;
  margin: 45vh auto;

  animation: ${spin} 1s linear infinite;
`;
