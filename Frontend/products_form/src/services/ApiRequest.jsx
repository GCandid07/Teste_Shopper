import axios from "axios";
import { goToShopping } from "../router/Coordinator"

const BASE_URL = "http://localhost:3003/"

export const getProducts = async() => {
  try {
    const {data} = await axios.get(`${BASE_URL}products`)
    return data
  } catch (error) {
    const { message } = error.response.data
    alert(message)
  }
}

export const postClient = async(body, navigate, clear) => {
  try {
    const {data} = await axios.post(`${BASE_URL}client`, body)
    goToShopping(navigate)
    localStorage.setItem("user", JSON.stringify(data.account))
    clear()
  } catch (error) {
    const { message } = error.response.data
    alert(message)
  }
}

export const getAccount = async(email, password, navigate, clear) => {
  try {
    const {data} = await axios.get(`${BASE_URL}login?email=${email}&password=${password}`)
    goToShopping(navigate)
    localStorage.setItem("user", JSON.stringify(data.account))
    clear()
  } catch (error) {
    const { message } = error.response.data
    alert(message)
  }
}

export const shoppingCartCreate = async (body) => {
  try {
    await axios.post(`${BASE_URL}cart`, body)
  } catch (error) {
    const { message } = error.response.data
    alert(message)
  }
}

export const editStock = async (id, body) => {
  try {
    await axios.put(`${BASE_URL}stock?id=${id}`, body)
  } catch (error) {
    const { message } = error.response.data
    alert(message)
  }
}
