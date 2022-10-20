import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Form } from './Styles';
import { getAccount } from '../../services/ApiRequest';

export const Login = () => {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    getAccount(form.email, form.password, navigate, cleanFields)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={onChange}
        placeholder="email"
        required
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={onChange}
        placeholder="password"
        required
      />
      <input 
        type={"submit"} 
        value="Ir às compras"
      />
    </Form>
  )
}
