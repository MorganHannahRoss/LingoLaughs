import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Header from './Header.tsx'
import Translation from './Translation.tsx'
import DadJoke from './DadJoke.tsx'
const App = () => {
  

  return (
    <>
      <div>
        <Header />
        <Translation />
        <DadJoke />
      </div>
    </>
  )
}

export default App
