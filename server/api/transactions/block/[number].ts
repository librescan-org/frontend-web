// @ts-ignore
import api_pb from '~~/proto/api_pb'
import { useClient } from '~~/composables/use-client'
import { useQuery } from '~~/composables/use-query'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const { limit, offset } = useQuery(query)

  return new Promise<api_pb.TransactionsListResponse.AsObject>((resolve, reject) => {
    const blockNumber = Number(event.context.params?.number)

    const pagination = new api_pb.PaginationRequest()
    pagination.setLimit(limit)
    pagination.setOffset(offset)

    const request = new api_pb.ListTransactionsByBlockNumberRequest()
    request.setBlocknumber(blockNumber)
    request.setPagination(pagination)

    const { client } = useClient()
    client.listTransactionsByBlockNumber(request, (err: any, response: any) => {
      if (err) reject(err)
      resolve(response.toObject())
    })
  })
})
