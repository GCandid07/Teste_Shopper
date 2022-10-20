import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 6vh auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
`;

export const Product = styled.ul`
  list-style-type: none;
  width: 180px;
  box-shadow: 1px 2px 10px 1px #ccc;
  margin-top: 2em;
  background-color: #ffffffe1;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const ProductImage = styled.li`
  height: 25vh;
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.li`
  display: flex;
  align-items: center;
  height: 10vh;
  padding: 5px;
  font-size: .8em;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
`;

export const ProductPrice = styled.li`
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;
  color: gold;
  text-shadow: 1px 1px 2px #aaa;
  padding: 5px 0;
  span {
    color: #2da77a;
  }
`;

export const ProductStock = styled.li`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8em;
  padding: 5px;
`;

export const ProductButton = styled.li`
  width: 60%;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px 0;
  text-align: center;
  font-size: .8em;
  font-weight: 700;
  color: #2da77a;
  border: 1px solid #666;
  border-radius: 21px;
  transition: all .5s;
  &:hover {
    background-color: #2da77a;
    color: #fff;
  }
`;
