import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewAccount = () => {

  // Login State
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: ''
  })

  // Get User
  const { name, email, password, confPassword } = user

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // User Login
  const onSubmit = e => {
    e.preventDefault()

    // Non empty fields validations

  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear Cuenta</h1>

        <form
          onSubmit={onSubmit}
        >

          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Tu nombre"
              onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu email"
              onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu password"
              onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="confPassword">Confirmar password</label>
            <input
              type="password"
              id="confPassword"
              name="confPassword"
              value={confPassword}
              placeholder="Confirmar password"
              onChange={onChange} />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to="/" className="enlace-cuenta">
          Ingresar con cuenta existente
        </Link>
      </div>
    </div>
  )
}

export default NewAccount