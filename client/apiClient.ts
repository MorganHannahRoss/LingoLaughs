import request from 'superagent'
import { Translate } from '../models/translation.ts'

const yodaServerURL = '/api.funtranslations.com/translate'

export function getTranslate(): Promise<Translate> {
  return request
    .get(`${yodaServerURL}/yoda.json`)
    .then((response) => response.body)
}
