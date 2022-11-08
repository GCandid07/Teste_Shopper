import styled, {keyframes} from "styled-components";

const ProgressiveBar = keyframes`
  0% { width: 100%; }  
  100% { width: 0%; }
`;

const Slide = keyframes`
  0% { top: -1em; }
  100% { top: 1em; }
`;

export const Container = styled.div`
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0em;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  box-shadow: 1px 1px 3px 3px #ccc;
  ${(props) => (`background-color: ${props.BG};`)}
  animation: ${Slide} .2s linear 1 forwards alternate;
  p {
    height: 100% !important;
  }
  img {
    margin-left: 4px;
    width: 1.2em;
  }
  span {
    width: 256px;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #000;
    animation: ${ProgressiveBar} 2s linear 1;
  }
`;

export const Sucess = styled.p`
  font-weight: bold;
  color: #000;
  font-size: .8em;
  text-shadow: 1px 1px 2px #fff;
`;

export const Fail = styled(Sucess)``;