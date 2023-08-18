import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

function handleEmail(evento){
  setEmail(evento.target.value)

}

function handleSenha(evento){
  setSenha(evento.target.value)

}

function handleSubmit(){
  alert(`
    Email:${email}
    Senha:${senha}
  `)
}

  return (
    <>
    
    <header>
      <h1>Login</h1>
    </header>

    <main>
      <form action="" onSubmit={handleSubmit}>

        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id='email' placeholder='example@gmail.com' onChange={handleEmail}/>
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" id='senha' placeholder='Digite sua senha' onChange={handleSenha}/>  
        </div>
    
        <button>SIGN UP</button>
      </form>

      
    </main>
    </>
  )
}

export default App
