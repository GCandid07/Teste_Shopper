import React from 'react'

export const SearchBar = () => {

  const { form, onChange, cleanFields } = useForm({
    search: ""
  })

  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        value={form.search}
        onChange={onChange}
        placeholder="Procure aqui"
      />
    </div>
  )
}
