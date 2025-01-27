import request from 'superagent'
import { Translate } from '../../models/translation.ts'

export async function getTranslation(): Promise<Translate> {
  const res = await request.post('/api/v1/translation')
  return res.body
}