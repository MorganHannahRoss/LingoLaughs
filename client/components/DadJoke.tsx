import { useQuery } from '@tanstack/react-query'
import { getDadJoke } from '../api/dadjokeapi'

function DadJoke() {
  const { data, refetch } = useQuery({ queryKey: ['joke'], queryFn: () => getDadJoke() })

  return (
    <>
      <div className="translation-container">
        <div className="input-text">
          <h1 className="Joke-text">{data?.attachments[0].text}</h1>
          <button type='submit' className='input-text button' onClick={() => refetch()}>New Joke</button>
        </div>
      </div>
    </>
  )
}

export default DadJoke
