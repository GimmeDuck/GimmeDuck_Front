// Styles.js
import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 20vw;
  height: 30vh;
  background: #ffffffb7;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const LoadingText = styled.div`
  text-align: center;
  font-size: 1.3rem;
  font-family: 'NanumSquare', sans-serif;
  font-weight: bold;
`;