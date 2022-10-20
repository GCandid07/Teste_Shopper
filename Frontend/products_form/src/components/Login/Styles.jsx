import styled from "styled-components";

export const Form = styled.form`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  input:nth-child(1),
  input:nth-child(2) {
    width: 15em;
    padding: .4em;
    text-align: center;
    font-size: 1.1em;
    outline: 0;
    border: none;
    border-bottom: 1px solid #ccc;
    color: #999;
    background-color: #e8f9f378;
  }
  input:nth-child(3) {
    width: 20em;
    height: 3em;
    border-radius: 16px;
    border: 1px solid #ddd;
    background-color: #2da77a;
    color: #fff;
    padding: .5em;
    transition: all 0.5s;
    cursor: pointer;
    &:hover{
      background-color: #2b6b53;
    }
  }
`;