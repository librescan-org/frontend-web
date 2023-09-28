// @ts-ignore
import api_pb from '~~/proto/api_pb'
import { useClient } from '~~/composables/use-client'
import { useQuery } from '~~/composables/use-query'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const { limit, offset } = useQuery(query)

  return new Promise<api_pb.ListErc20TokenTransfersResponse.AsObject>((resolve, reject) => {
    const pagination = new api_pb.PaginationRequest()
    pagination.setLimit(limit)
    pagination.setOffset(offset)

    const request = new api_pb.ListErc20TokenTransfersRequest()
    request.setPagination(pagination)

    const { client } = useClient()
    client.listErc20TokenTransfers(request, (err: any, response: any) => {
      if (err) reject(err)
      resolve(response.toObject())
    })
  })
})
