import styled, { keyframes } from "styled-components";

// ### Loading

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

// ------------------------------------------------------------------------ //

// ### LoadingRotate

const Rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerRotate = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  span {
    position: fixed;
    border-radius: 50%;
    width: 2.0em;
    height: 2.0em;
    border: 2px solid #2da77a;
    background-color: #e8f9f3;
  }
  span:nth-child(1) {
    position: absolute;
    border-top: 2px solid #e8f9f3;
    animation: ${Rotate} 2.5s linear infinite;
  }
  span:nth-child(2) {
    position: absolute;
    border-bottom: 2px solid #e8f9f3;
    animation: ${Rotate} 2.5s linear infinite reverse;
    width: 1.5em;
    height: 1.5em;
  }
  span:nth-child(3) {
    position: absolute;
    border-left: 2px solid #e8f9f3;
    animation: ${Rotate} 2.5s linear infinite;
    width: 1.0em;
    height: 1.0em;
  }
`;
