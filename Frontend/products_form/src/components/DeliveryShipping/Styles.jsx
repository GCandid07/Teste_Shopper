import styled from "styled-components";

export const Delivery = styled.div`
  width: 95%;
  height: 15vh;
  margin-top: 1em;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DeliveryMain = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const DeliveryInfo = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  align-items: baseline;
  p {
    height: 100%;
  }
  a {
    width: 30%;
    font-size: 0.8em;
    font-weight: 700;
    color: #222;
  }
`;

export const DeliveryInput = styled.form`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  input {
    width: 60%;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0 10px;
    font-size: 1.1em;
    &[type=number]::-webkit-inner-spin-button { 
      -webkit-appearance: none;   
    }
    &[type=number] { 
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
  button {
    width: 30%;
    font-size: 1.1em;
    font-weight: 600;
    outline: none;
    color: #2da77a;
    border: 1px solid #2da77a;
    border-radius: 8px;
    background-color: #E8F9F3;
    cursor: pointer;
  }
`;

export const DeliveryContent = styled(DeliveryMain)``;

export const DeliveryTexts = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  align-items: baseline;
  p {
    height: 1em;
  }
  span {
    font-size: .8em;
    width: 25%;
    text-decoration: underline;
    color: #2da77a;
    cursor: pointer
  }
`;

export const DeliveryDates = styled.div`
  display: flex;
  gap: 1%;
  width: 90%;
  height: 75%;
  padding: 1% 0;
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #2da77a;
  ${({bg}) => (`background-color: ${(bg && bg)};`)}
  cursor: pointer;
  &:hover {
    background-color: #E8F9F3;
  }
  p{
    width: 100% !important;
    height: 1em !important;
    text-align: center;
    font-size: .8em;
  }
`;