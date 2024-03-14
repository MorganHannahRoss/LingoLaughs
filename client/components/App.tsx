import { useState } from 'react'
import { getGreeting } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import Header from './Header.tsx'
import Translation from './Translation.tsx'
const App = () => {
  

  return (
    <>
      <Header />
      <Translation />
    </>
  )
}

export default App
