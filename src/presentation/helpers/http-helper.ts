import { HttpResponse } from '../protocol/https'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
