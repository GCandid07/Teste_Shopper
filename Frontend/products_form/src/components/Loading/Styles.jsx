import styled, { keyframes } from "styled-components";

const Pulse = keyframes`
  0%, 100% {
    transform: scale(1.2);
    background: #2da77a;
    border: 1px solid #2da77a;
  }
  50% {
    transform: scale(1.3);
    background: #E8F9F3;
    border: 1px solid #E8F9F3;
  }
`;

export const Spinner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  span {
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }
  span:nth-child(1) {
    animation: ${Pulse} 2s linear infinite;
  }
  span:nth-child(2) {
    animation: ${Pulse} 2.5s linear infinite;
  }
  span:nth-child(3) {
    animation: ${Pulse} 3s linear infinite;
  }
`;
