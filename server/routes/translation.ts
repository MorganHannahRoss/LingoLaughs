import express from 'express'
import request from 'superagent'

const router = express.Router()
const yodaApiKey = process.env.YODA_API_KEY

// translates the req.body.text
router.get('/', async (req, res) => {
  try {
    const textToTranslate = req.query.text // Get the text to translate from the query parameter

    if (!textToTranslate) {
      throw new Error('Text to translate is missing')
    }

    const response = await request
      .get('http://localhost:3000//translations')
      .set('X-Funtranslations-Api-Secret', yodaApiKey ?? '')
      .query({ text: textToTranslate }) // Pass text to translate as query parameter

    console.log(response.body) // Logging the response body

    res.json(response.body)
  } catch (error) {
    console.error('Error translating text')
    res.status(500)
  }
})

// Post
router.post('/', async (req, res) => {
  try {
    const yodaApiKey = process.env.YODA_API_KEY
    const textToTranslate = req.body.text

    if (!yodaApiKey) {
      throw new Error('Yoda API key is missing')
    }

    if (!textToTranslate) {
      throw new Error('Text to translate is missing')
    }

    const response = await request
      .get('https://api.funtranslations.com/translate/yoda.json')
      .set('X-Funtranslations-Api-Secret', yodaApiKey ?? '')
      .query({ text: textToTranslate }) // Pass text to translate as query parameter

    console.log(response.body) // Logging the response body

    res.json(response.body)

    res.json(response.body)
  } catch (error) {
    console.error('Error translating text')
  }
})

export default router
