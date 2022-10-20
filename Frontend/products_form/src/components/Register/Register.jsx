import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { postClient } from '../../services/ApiRequest';
import { Form } from './Styles';

export const Register = () => {

  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    password: "",
    email: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    const body = {
      name: form.name,
      email: form.email,
      password: form.password
    };

    postClient(body, navigate, cleanFields)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={onChange}
        placeholder="name"
        required
      />
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
