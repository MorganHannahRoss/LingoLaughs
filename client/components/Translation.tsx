function Translation() {
  return (
    <>
      {/* form */}

      <div className="input-text">
        <form>
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
