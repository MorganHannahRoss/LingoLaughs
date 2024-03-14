import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
const yodaApiKey = process.env.YODA_API_KEY

router.get('/', async (req, res, next) => {
  try {
    const response = await request
      .get('https://api.funtranslations.com/translate/yoda.json')
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .set('X-Funtranslations-Api-Secret', yodaApiKey!)
      .query({})

    console.log(response)

    res.json(response.body)
  } catch (error) {
    console.log(error)
    next(error)
  }
})
