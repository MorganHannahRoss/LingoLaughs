import { useMutation } from '@tanstack/react-query'
import { FormEvent, useState } from 'react'
import request from 'superagent'

function Translator() {
  const [inputText, setInputText] = useState('')

  const [loading, setLoading] = useState(false)

  const mutation = useMutation({
    mutationFn: async (text: string) => {
      const response = await request
        .post('http://localhost:3000/translations')
        .send({ text })
      return response.body.contents.translated
    },
    onSuccess: () => {},
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (inputText === '') {
      setLoading(false)
    } else {
      setLoading(true)
      try {
        await mutation.mutateAsync(inputText)
      } catch (error) {
        console.error('Error translating text:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  //handle the dad
  const handleTranslateDadJoke = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      })
      const data = await response.json()
      setInputText(data.joke)
      await mutation.mutateAsync(data.joke)
    } catch (error) {
      console.error('Error fetching Dad joke:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="translation-container">
        <form className="input-text" onSubmit={handleSubmit}>
          <p>Translation Please: </p>
          <input type="text" value={inputText} onChange={handleInputChange} />
          <button type="submit" disabled={loading}>
            {loading ? 'Translating hehe...' : 'Translate'}
          </button>
        </form>
      </div>

      <div className="translation-container">
        <div className="input-text">
          <p>Your Yoda Translation: </p>
          {mutation.isSuccess && <p>{mutation.data}</p>}
        </div>
      </div>

      <div className="translation-container">
        <div className="input-text">
          <p>Your Yoda Dad Joke: </p>
          {mutation.isSuccess && <p>{mutation.data}</p>}
          <button
            type="submit"
            className="input-text"
            onClick={handleTranslateDadJoke}
            disabled={loading}
          >
            {loading ? 'Loading Dad Joke...' : 'Translate Dad Joke'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Translator
