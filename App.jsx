import { useState } from 'react'
import './App.css'
import { Cabecalho } from './components/Cabecalho'
import { Contato } from './components/Contato.jsx'
import { Objetivos } from './components/Objetivo.jsx'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Cabecalho/>
        <Contato/>
        <Objetivos/>
      </header>
    </div>
  )
}

export default App
