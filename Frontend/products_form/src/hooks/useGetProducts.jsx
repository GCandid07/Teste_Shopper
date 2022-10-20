import { useState, useEffect } from "react";
import { getProducts } from "../services/ApiRequest";

export const useGetProducts = () => {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    handleGetProducts()
  }, [])

  const handleGetProducts = async() => {
    setLoading(true)
    setData(await getProducts())
    setLoading(false)
  }

  return { data, loading }
}
