import styled from "styled-components";

export const Container = styled.div`
   position: sticky;
    top: 0;
    z-index: 1;
`;

export const Menu =  styled.ul`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 1em 2.5em 1em 2.5em;
  justify-content: space-between;
  list-style-type: none;
  background-color: #E8F9F3;
  border-bottom: 2px solid #2da77a;
  position: sticky;
  top: 0;
  z-index: 1;
  li {
    font-size: 1.8em;
  }
  li:nth-child(1) {
    color: #2da77a;
    text-shadow: 1px 1px 10px;
  }
  li:nth-child(2) {
    transition: all .5s;
    cursor: pointer;
    width: 10%;
    display: flex;
    align-items: baseline;
    &:hover{
      transform: scale(1.05)
    }
    span {
      font-size: .5em;
    }
    @media screen and (max-width: 700px){
      width: 20%;
      font-size: 1.5em;
    }
  }
`;
