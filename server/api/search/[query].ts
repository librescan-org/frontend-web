// @ts-ignore
import api_pb from '~~/proto/api_pb'
import { useClient } from '~~/composables/use-client'
import { status } from '@grpc/grpc-js'

export default defineEventHandler((event) => {
  return new Promise<api_pb.GetSearchTermTypeResponse.AsObject>((resolve, reject) => {
    const query = event.context.params?.query ?? ''

    const request = new api_pb.GetSearchTermTypeRequest()
    request.setSearchterm(query)

    const { client } = useClient()
    client.getSearchTermType(request, (err: any, response: any) => {
      if (err) reject(err)
      resolve(response.toObject())
    })
  }).catch((error) => {
    if (error.code === status.NOT_FOUND) {
      throw createError({ message: error.details, statusCode: 404, fatal: false })
    } else {
      throw createError({ message: error.details, statusCode: 500, fatal: false })
    }
  })
})
