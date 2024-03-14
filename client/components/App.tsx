import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Header from './Header.tsx'
import Translation from './Translation.tsx'
const App = () => {
  

  return (
    <>
      <div>
        <Header />
        <Translation />
      </div>
    </>
  )
}

export default App
