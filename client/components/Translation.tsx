import { FormEvent } from "react"

function Translation() {

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    // call api
  }

  return (
    <>
      {/* form */}

      <div className ="translation-container">
        <form className="input-text" onSubmit={handleSubmit}>
          <p>Input Translation</p>
          <button> Translate </button>
          {/* <button type="Translate" disabled={loading}>
            {loading ? 'Translating...' : 'Translate'}
          </button> */}
          <></>
        </form>
      </div>

      {/* probably will require react */}
      <div className="output-text">
        <p>Output Translation</p>
        {/* <p>{translatedText}</p>  */}
        {/* doesnt exist yet */}
      </div>
    </>
  )
}

export default Translation
