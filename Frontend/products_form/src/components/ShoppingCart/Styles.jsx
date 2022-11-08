import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 10vh - 2em);
  background-color: #cccccc91;
  position: absolute;
  right: 0;
  z-index: 2;
  ${(props) => ( props.display === "true" ? 'display: block' : 'display: none')}
`

export const ContainerModal = styled.div`
  overflow: auto;
  width: 500px;
  max-height: calc(100vh - 10vh - 2em);
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  ${(props) => ( props.display === "true" ? 'display: block' : 'display: none')};
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6fae99;
    border-radius: 20px;
    border: 3px solid #fff;
  }
  @media screen and (max-width: 600px){
    width: 100%;
  }
`;

export const ContentCart = styled.div`
  h1 {
    margin: 0 auto 1em auto;
    width: 50%;
    font-size: 1.5em;
    font-weight: 300;
    text-align: center;
    padding: .5em;
    border-bottom: 1px solid #ddd;
  }
  p {
    width: 80%;
    height: 10vh;
  }
`;

export const ContentList = styled.ul`
  margin: 0 10px;
  border-bottom: 1px solid #cccccce1;
  padding: 10px 20px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li:nth-child(1){
    width: 45%;
    margin-right: 2%;
  }
  li:nth-child(2){
    width: 30%;
    text-align: center;
  }
  li:nth-child(3){
    width: 25%;
    text-align: left;
    padding-left: 5%;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border: 1px solid #ddd; 
`;

export const Products = styled.div`
  margin-bottom: .5em;
`;

export const ProductsList = styled(ContentList)`
  margin: 4px 2px;
  box-shadow: 1px 3px 8px #ccc;
  li {
    width: 40%;
  }
  li:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2em;
    border: 1px solid #cccccc6b;
    border-radius: 10px;
    span {
      color: #4f9f6f;
      padding: 0 .5em;
    }
  }
  li:nth-child(3){
    font-size: 1.2em;
  }
  button {
    height: 50px;
    background-color: #fff;
    border: none;
    font-size: 1.2em;
    padding: .4em .6em;
    transition: 0.2s all;
    cursor: pointer;
    outline: none;
    color: #4f9f6f;
    transition: all .3s;
    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px #0000003d;
      background-color: #4f9f6f;
      color: #d3d2d2d1;
    }
    &:hover {
      background-color: #4f9f6f;
      color: #fff;
    }
  }
  @media screen and (max-width: 600px){
    li, li:nth-child(2), li:nth-child(3) {
      font-size: .9em;
    }
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 10vh;
  
  background-color: #35a584;
  border-top: 1px solid #777;
  p {
    width: 75%;
    height: 3vh;
    font-size: 1.4em;
    color: #fff;
  }
  button {
    width: 25%;
    height: 5vh;
    border-radius: 21px;
    outline: none;
    border: 1px solid #999;
    background-color: #fff;
    cursor: pointer;
    transition: all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:active {
      transform: scale(0.9);
      box-shadow: 1px 2px 10px #0000003d;
      color: #ccc;
    }
  }
`;
