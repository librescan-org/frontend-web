// @ts-ignore
import api_pb from '~~/proto/api_pb'
import { useClient } from '~~/composables/use-client'
import { useQuery } from '~~/composables/use-query'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const { limit, offset } = useQuery(query)

  return new Promise<api_pb.TransactionsListResponse.AsObject>((resolve, reject) => {
    const request = new api_pb.PaginationRequest()
    request.setLimit(limit)
    request.setOffset(offset)

    const { client } = useClient()
    client.listTransactions(request, (err: any, response: any) => {
      if (err) reject(err)
      resolve(response.toObject())
    })
  })
})
