import React, { useState, FormEvent } from 'react'
import BackArrow from '../../components/BackArrow'
import './style.css'

const Login: React.FC = () => {
  const [Name, setName] = useState<string>('')
  const [Password, setPassword] = useState<string>('')

  const onSubmit = async (e: FormEvent): Promise<void | boolean> => {
    try {
      e.preventDefault()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="wrapper_login">
      <BackArrow text="Voltar para Home" to="/" />
      <form onSubmit={async e => await onSubmit(e)}>
        <header>
          <h5>Entrar</h5>
        </header>
        <section>
          <input
            type="text"
            name="name"
            value={Name}
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={Password}
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </section>
      </form>
    </div>
  )
}

export default Login
