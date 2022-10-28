// Styles.js
import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 30vw;
  height: 40vh;
  background: #ffffffb7;
  z-index: 999;
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