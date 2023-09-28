// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api_pb = require('./api_pb.js');

function serialize_service_BlockResponse(arg) {
  if (!(arg instanceof api_pb.BlockResponse)) {
    throw new Error('Expected argument of type service.BlockResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_BlockResponse(buffer_arg) {
  return api_pb.BlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_GetBlockByBlockHashRequest(arg) {
  if (!(arg instanceof api_pb.GetBlockByBlockHashRequest)) {
    throw new Error('Expected argument of type service.GetBlockByBlockHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_GetBlockByBlockHashRequest(buffer_arg) {
  return api_pb.GetBlockByBlockHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_GetBlockByBlockNumberRequest(arg) {
  if (!(arg instanceof api_pb.GetBlockByBlockNumberRequest)) {
    throw new Error('Expected argument of type service.GetBlockByBlockNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_GetBlockByBlockNumberRequest(buffer_arg) {
  return api_pb.GetBlockByBlockNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_GetSearchTermTypeRequest(arg) {
  if (!(arg instanceof api_pb.GetSearchTermTypeRequest)) {
    throw new Error('Expected argument of type service.GetSearchTermTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_GetSearchTermTypeRequest(buffer_arg) {
  return api_pb.GetSearchTermTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_GetSearchTermTypeResponse(arg) {
  if (!(arg instanceof api_pb.GetSearchTermTypeResponse)) {
    throw new Error('Expected argument of type service.GetSearchTermTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_GetSearchTermTypeResponse(buffer_arg) {
  return api_pb.GetSearchTermTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_GetTransactionRequest(arg) {
  if (!(arg instanceof api_pb.GetTransactionRequest)) {
    throw new Error('Expected argument of type service.GetTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_GetTransactionRequest(buffer_arg) {
  return api_pb.GetTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_GetTransactionResponse(arg) {
  if (!(arg instanceof api_pb.GetTransactionResponse)) {
    throw new Error('Expected argument of type service.GetTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_GetTransactionResponse(buffer_arg) {
  return api_pb.GetTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_GetUncleByHashResponse(arg) {
  if (!(arg instanceof api_pb.GetUncleByHashResponse)) {
    throw new Error('Expected argument of type service.GetUncleByHashResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_GetUncleByHashResponse(buffer_arg) {
  return api_pb.GetUncleByHashResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_InspectAddressRequest(arg) {
  if (!(arg instanceof api_pb.InspectAddressRequest)) {
    throw new Error('Expected argument of type service.InspectAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_InspectAddressRequest(buffer_arg) {
  return api_pb.InspectAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_InspectAddressResponse(arg) {
  if (!(arg instanceof api_pb.InspectAddressResponse)) {
    throw new Error('Expected argument of type service.InspectAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_InspectAddressResponse(buffer_arg) {
  return api_pb.InspectAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_ListBlocksResponse(arg) {
  if (!(arg instanceof api_pb.ListBlocksResponse)) {
    throw new Error('Expected argument of type service.ListBlocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_ListBlocksResponse(buffer_arg) {
  return api_pb.ListBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_ListErc20TokenTransfersRequest(arg) {
  if (!(arg instanceof api_pb.ListErc20TokenTransfersRequest)) {
    throw new Error('Expected argument of type service.ListErc20TokenTransfersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_ListErc20TokenTransfersRequest(buffer_arg) {
  return api_pb.ListErc20TokenTransfersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_ListErc20TokenTransfersResponse(arg) {
  if (!(arg instanceof api_pb.ListErc20TokenTransfersResponse)) {
    throw new Error('Expected argument of type service.ListErc20TokenTransfersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_ListErc20TokenTransfersResponse(buffer_arg) {
  return api_pb.ListErc20TokenTransfersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_ListTracesByBlockNumberRequest(arg) {
  if (!(arg instanceof api_pb.ListTracesByBlockNumberRequest)) {
    throw new Error('Expected argument of type service.ListTracesByBlockNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_ListTracesByBlockNumberRequest(buffer_arg) {
  return api_pb.ListTracesByBlockNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_ListTracesResponse(arg) {
  if (!(arg instanceof api_pb.ListTracesResponse)) {
    throw new Error('Expected argument of type service.ListTracesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_ListTracesResponse(buffer_arg) {
  return api_pb.ListTracesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_ListTransactionsByAddressRequest(arg) {
  if (!(arg instanceof api_pb.ListTransactionsByAddressRequest)) {
    throw new Error('Expected argument of type service.ListTransactionsByAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_ListTransactionsByAddressRequest(buffer_arg) {
  return api_pb.ListTransactionsByAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_ListTransactionsByBlockNumberRequest(arg) {
  if (!(arg instanceof api_pb.ListTransactionsByBlockNumberRequest)) {
    throw new Error('Expected argument of type service.ListTransactionsByBlockNumberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_ListTransactionsByBlockNumberRequest(buffer_arg) {
  return api_pb.ListTransactionsByBlockNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_PaginationRequest(arg) {
  if (!(arg instanceof api_pb.PaginationRequest)) {
    throw new Error('Expected argument of type service.PaginationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_PaginationRequest(buffer_arg) {
  return api_pb.PaginationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_TransactionsListResponse(arg) {
  if (!(arg instanceof api_pb.TransactionsListResponse)) {
    throw new Error('Expected argument of type service.TransactionsListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_TransactionsListResponse(buffer_arg) {
  return api_pb.TransactionsListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DataAPIService = exports.DataAPIService = {
  getBlockByBlockNumber: {
    path: '/service.DataAPI/GetBlockByBlockNumber',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetBlockByBlockNumberRequest,
    responseType: api_pb.BlockResponse,
    requestSerialize: serialize_service_GetBlockByBlockNumberRequest,
    requestDeserialize: deserialize_service_GetBlockByBlockNumberRequest,
    responseSerialize: serialize_service_BlockResponse,
    responseDeserialize: deserialize_service_BlockResponse,
  },
  getBlockByBlockHash: {
    path: '/service.DataAPI/GetBlockByBlockHash',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetBlockByBlockHashRequest,
    responseType: api_pb.BlockResponse,
    requestSerialize: serialize_service_GetBlockByBlockHashRequest,
    requestDeserialize: deserialize_service_GetBlockByBlockHashRequest,
    responseSerialize: serialize_service_BlockResponse,
    responseDeserialize: deserialize_service_BlockResponse,
  },
  getUncleByHash: {
    path: '/service.DataAPI/GetUncleByHash',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetBlockByBlockHashRequest,
    responseType: api_pb.GetUncleByHashResponse,
    requestSerialize: serialize_service_GetBlockByBlockHashRequest,
    requestDeserialize: deserialize_service_GetBlockByBlockHashRequest,
    responseSerialize: serialize_service_GetUncleByHashResponse,
    responseDeserialize: deserialize_service_GetUncleByHashResponse,
  },
  getTransactionByHash: {
    path: '/service.DataAPI/GetTransactionByHash',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetTransactionRequest,
    responseType: api_pb.GetTransactionResponse,
    requestSerialize: serialize_service_GetTransactionRequest,
    requestDeserialize: deserialize_service_GetTransactionRequest,
    responseSerialize: serialize_service_GetTransactionResponse,
    responseDeserialize: deserialize_service_GetTransactionResponse,
  },
  getSearchTermType: {
    path: '/service.DataAPI/GetSearchTermType',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.GetSearchTermTypeRequest,
    responseType: api_pb.GetSearchTermTypeResponse,
    requestSerialize: serialize_service_GetSearchTermTypeRequest,
    requestDeserialize: deserialize_service_GetSearchTermTypeRequest,
    responseSerialize: serialize_service_GetSearchTermTypeResponse,
    responseDeserialize: deserialize_service_GetSearchTermTypeResponse,
  },
  listBlocks: {
    path: '/service.DataAPI/ListBlocks',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PaginationRequest,
    responseType: api_pb.ListBlocksResponse,
    requestSerialize: serialize_service_PaginationRequest,
    requestDeserialize: deserialize_service_PaginationRequest,
    responseSerialize: serialize_service_ListBlocksResponse,
    responseDeserialize: deserialize_service_ListBlocksResponse,
  },
  listTransactions: {
    path: '/service.DataAPI/ListTransactions',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PaginationRequest,
    responseType: api_pb.TransactionsListResponse,
    requestSerialize: serialize_service_PaginationRequest,
    requestDeserialize: deserialize_service_PaginationRequest,
    responseSerialize: serialize_service_TransactionsListResponse,
    responseDeserialize: deserialize_service_TransactionsListResponse,
  },
  listTransactionsByBlockNumber: {
    path: '/service.DataAPI/ListTransactionsByBlockNumber',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.ListTransactionsByBlockNumberRequest,
    responseType: api_pb.TransactionsListResponse,
    requestSerialize: serialize_service_ListTransactionsByBlockNumberRequest,
    requestDeserialize: deserialize_service_ListTransactionsByBlockNumberRequest,
    responseSerialize: serialize_service_TransactionsListResponse,
    responseDeserialize: deserialize_service_TransactionsListResponse,
  },
  listTransactionsByAddress: {
    path: '/service.DataAPI/ListTransactionsByAddress',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.ListTransactionsByAddressRequest,
    responseType: api_pb.TransactionsListResponse,
    requestSerialize: serialize_service_ListTransactionsByAddressRequest,
    requestDeserialize: deserialize_service_ListTransactionsByAddressRequest,
    responseSerialize: serialize_service_TransactionsListResponse,
    responseDeserialize: deserialize_service_TransactionsListResponse,
  },
  listErc20TokenTransfers: {
    path: '/service.DataAPI/ListErc20TokenTransfers',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.ListErc20TokenTransfersRequest,
    responseType: api_pb.ListErc20TokenTransfersResponse,
    requestSerialize: serialize_service_ListErc20TokenTransfersRequest,
    requestDeserialize: deserialize_service_ListErc20TokenTransfersRequest,
    responseSerialize: serialize_service_ListErc20TokenTransfersResponse,
    responseDeserialize: deserialize_service_ListErc20TokenTransfersResponse,
  },
  listTracesByBlockNumber: {
    path: '/service.DataAPI/ListTracesByBlockNumber',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.ListTracesByBlockNumberRequest,
    responseType: api_pb.ListTracesResponse,
    requestSerialize: serialize_service_ListTracesByBlockNumberRequest,
    requestDeserialize: deserialize_service_ListTracesByBlockNumberRequest,
    responseSerialize: serialize_service_ListTracesResponse,
    responseDeserialize: deserialize_service_ListTracesResponse,
  },
  listTraces: {
    path: '/service.DataAPI/ListTraces',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PaginationRequest,
    responseType: api_pb.ListTracesResponse,
    requestSerialize: serialize_service_PaginationRequest,
    requestDeserialize: deserialize_service_PaginationRequest,
    responseSerialize: serialize_service_ListTracesResponse,
    responseDeserialize: deserialize_service_ListTracesResponse,
  },
  inspectAddress: {
    path: '/service.DataAPI/InspectAddress',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.InspectAddressRequest,
    responseType: api_pb.InspectAddressResponse,
    requestSerialize: serialize_service_InspectAddressRequest,
    requestDeserialize: deserialize_service_InspectAddressRequest,
    responseSerialize: serialize_service_InspectAddressResponse,
    responseDeserialize: deserialize_service_InspectAddressResponse,
  },
};

exports.DataAPIClient = grpc.makeGenericClientConstructor(DataAPIService);
