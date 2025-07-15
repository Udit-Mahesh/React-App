import { useState } from 'react'
import './App.css'
import Tabs from './Tabs.jsx'
import Adboard from './Adboard.jsx'
import RecProd from './RecProd.jsx'
import Dashboard from './Dashboard.jsx'

function App() {
  return (
    <>
      <Tabs/>
      <Dashboard/>
      <Adboard/>
      <RecProd/>
    </>
  )
}

export default App
