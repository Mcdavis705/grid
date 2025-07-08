import { useState } from 'react'
import Grid from './components/Grid'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Main app</h1>
      <Grid/>
    </>
  )
}

export default App
