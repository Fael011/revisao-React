import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    
    <header>
      <h1>Login</h1>
    </header>

    <main>
      <form action="">

        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id='email' placeholder='example@gmail.com'/>
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" id='senha' placeholder='Digite sua senha'/>  
        </div>
    
      </form>
    </main>
    </>
  )
}

export default App
