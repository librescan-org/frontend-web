import grpc from '@grpc/grpc-js'
import { DataAPIClient } from '~~/proto/api_grpc_pb'

export const useClient = () => {
  const config = useRuntimeConfig()

  const client = new DataAPIClient(
    config.app.grpcApiUrl,
    grpc.credentials.createInsecure()
  )

  return {
    client
  }
}
