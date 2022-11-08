import { useState, useEffect, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { FailFlashMessage } from "../FlashMessage/FlashMessage";
import { LoadingRotate } from "../Loading/Loading";
import { ShippingPossibles } from "../../utils/shippingPossibles";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  Delivery,
  DeliveryMain,
  DeliveryInfo,
  DeliveryInput,
  DeliveryContent,
  DeliveryTexts,
  DeliveryDates,
  Dates,
} from "./Styles";

export const DeliveryShipping = () => {

  const [delivery, setDelivery] = useState(false);
  const [flashMessage, setFlashMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dateTimes, setDateTimes] = useState([]);
  const [choice, setChoice] = useState(0);
  const { setters } = useContext(GlobalStateContext);
  const { form, onChange } = useForm({
    CEP: ""
  });

  useEffect(() => {
    setShipping(choice);
  }, [dateTimes, choice]);

  const Input = () => {
    const Format = /^([\d]{5})-*([\d]{3})/;
    return form.CEP = form.CEP.replace(Format, "$1-$2");
  };

  const submit = (e) => {
    e.preventDefault();
    if (form.CEP.length >= 8){
      setIsLoading(true);
      const newShippingPossibles = new ShippingPossibles(new Date()).results;
      setDateTimes(newShippingPossibles);
      setTimeout(() => {
        setDelivery(!delivery);
        setIsLoading(false);
      }, 1500);
    } else {
      setFlashMessage(true);
      setTimeout(() => {
        setFlashMessage(false);
      }, 2000);
    };
  };

  const setShipping = (order) => {
    if(dateTimes.length > 0) {
      setters.setShipping(dateTimes[order]);
    };
  };

  return (
    <Delivery>
      {flashMessage ? <FailFlashMessage Message="Digite um CEP válido"/> : ""}
      {!delivery 
        ? <DeliveryMain>
            <DeliveryInfo>
              <p>Calcule seu frete:</p>
              <a
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                rel="noreferrer"
                target={"_blank"}
              > Não sei meu CEP </a>
            </DeliveryInfo>
            <DeliveryInput onSubmit={submit}>
              <input 
                type="text"
                maxLength={8}
                minLength={8}
                name="CEP"
                value={form.CEP} 
                onChange={onChange}
                placeholder="Digite seu CEP"
                autoComplete="off"
              />
              <button type="submit">{isLoading ? <LoadingRotate/> : "Calcular"}</button>
            </DeliveryInput>
          </DeliveryMain>
        : <DeliveryContent>
            <DeliveryTexts>
              <p>Opções de entrega para {Input(form.CEP)}</p>
              <span onClick={() => setDelivery(!delivery)}>Usar outro CEP</span> 
            </DeliveryTexts>
            <DeliveryDates>
              {dateTimes && dateTimes.map((dates, i) => {
                const initDate = dates.initialDateTime 
                const endDate = dates.finalDateTime

                return (
                  <Dates onClick={() => setChoice(i)} bg={choice === i ? "#E8F9F3" : "#fff"} key={i}>
                    <p>{endDate.getDate() > new Date().getDate() ? "Amanhã" : "Hoje"}</p>
                    <p>
                      {initDate.getHours() + ":" + ("00" + initDate.getMinutes()).slice(1)}
                        -
                      {endDate.getHours() + ":" + ("00" + endDate.getMinutes()).slice(1)}
                    </p>
                    <p>Frete Grátis</p>
                  </Dates>
                );
              })};
            </DeliveryDates>
          </DeliveryContent>
      }
    </Delivery>
  );
};
