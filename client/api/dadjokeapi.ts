import request from 'superagent'
import { DadJoke } from '../../models/dadjoke.ts'

export async function getDadJoke(): Promise<DadJoke> {
  const response = await request.get(
    'https://icanhazdadjoke.com/slack'
  )
  return response.body
}