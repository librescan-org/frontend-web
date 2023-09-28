// @ts-ignore
import api_pb from '~~/proto/api_pb'
import { useClient } from '~~/composables/use-client'

export default defineEventHandler((event) => {
  return new Promise<api_pb.InspectAddressResponse.AsObject>((resolve, reject) => {
    const address = event.context.params?.address ?? ''
    const request = new api_pb.InspectAddressRequest()
    request.setAddress(address)

    const { client } = useClient()
    client.inspectAddress(request, (err: any, response: any) => {
      if (err) reject(err)
      resolve(response.toObject())
    })
  })
})
