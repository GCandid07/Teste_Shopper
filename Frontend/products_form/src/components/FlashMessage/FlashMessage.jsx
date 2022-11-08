import React from 'react'
import {Container, Sucess, Fail} from "./Styles"
import sucess_img from "../../assets/sucess.svg"
import fail_img from "../../assets/fail.svg"

export const SucessFlashMessage = ({Message}) => {
  return (
    <Container BG={"#00ff3396"}>
      <Sucess>{Message}</Sucess>
      <img src={sucess_img} alt="Ícone de sucesso"/>
      <span></span>
    </Container>
  )
}

export const FailFlashMessage = ({Message}) => {
  return (
    <Container BG={"#ff000096"}>
      <Fail>{Message}</Fail>
      <img src={fail_img} alt="Ícone de falha"/>
      <span></span>
    </Container>
  )
}

