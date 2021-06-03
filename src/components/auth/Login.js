import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  // Login State
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  // Get User
  const { email, password } = user

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
        <h1>Iniciar Sesión</h1>

        <form
          onSubmit={onSubmit}
        >
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
            <input 
              type="submit"
              className="btn btn-primario btn-block" 
              value="Inicial Sesion"
              />
          </div>
        </form>
        <Link to="/new-account" className="enlace-cuenta">
          Crear nueva cuenta
        </Link>
      </div>
    </div>
  )
}

export default Login