import styled from "styled-components";

export const Container = styled.div`
  background-color: #e8f9f378;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`;

export const Content = styled.div`
  padding: 2em;
  h1 {
    font-weight: 300;
    font-size: 1.5em;
    text-shadow: 1px 2px 2px #ccc;
    color: #2da77a;
    margin-bottom: 1em;
  }
  h2 {
    font-size: 1.8em;
    text-shadow: 1px 2px 2px #ccc;
    margin-bottom: 1em;
  }
  h3 {
    font-weight: 400;
    font-size: 1.6em;
    text-shadow: 1px 2px 2px #ccc;
  }
  @media screen and (max-width: 700px) {
    h1, h2, h3 {
      text-align: center;
    }
    h1 {
      font-size: 1.1em
    }
    h2 {
      font-size: 1.3em
    }
    h3 {
      font-size: 1.2em
    }
  }
`;

export const Paragraph = styled.p`
  span {
    color: #2b30bf;
    font-weight: 700;
    font-style: italic;
    cursor: pointer;
    text-decoration: underline;
  }
`;
