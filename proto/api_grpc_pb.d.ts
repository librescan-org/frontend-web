// package: service
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_pb from "./api_pb";

interface IDataAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBlockByBlockNumber: IDataAPIService_IGetBlockByBlockNumber;
    getBlockByBlockHash: IDataAPIService_IGetBlockByBlockHash;
    getUncleByHash: IDataAPIService_IGetUncleByHash;
    getTransactionByHash: IDataAPIService_IGetTransactionByHash;
    getSearchTermType: IDataAPIService_IGetSearchTermType;
    listBlocks: IDataAPIService_IListBlocks;
    listTransactions: IDataAPIService_IListTransactions;
    listTransactionsByBlockNumber: IDataAPIService_IListTransactionsByBlockNumber;
    listTransactionsByAddress: IDataAPIService_IListTransactionsByAddress;
    listErc20TokenTransfers: IDataAPIService_IListErc20TokenTransfers;
    listTracesByBlockNumber: IDataAPIService_IListTracesByBlockNumber;
    listTraces: IDataAPIService_IListTraces;
    inspectAddress: IDataAPIService_IInspectAddress;
}

interface IDataAPIService_IGetBlockByBlockNumber extends grpc.MethodDefinition<api_pb.GetBlockByBlockNumberRequest, api_pb.BlockResponse> {
    path: "/service.DataAPI/GetBlockByBlockNumber";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetBlockByBlockNumberRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetBlockByBlockNumberRequest>;
    responseSerialize: grpc.serialize<api_pb.BlockResponse>;
    responseDeserialize: grpc.deserialize<api_pb.BlockResponse>;
}
interface IDataAPIService_IGetBlockByBlockHash extends grpc.MethodDefinition<api_pb.GetBlockByBlockHashRequest, api_pb.BlockResponse> {
    path: "/service.DataAPI/GetBlockByBlockHash";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetBlockByBlockHashRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetBlockByBlockHashRequest>;
    responseSerialize: grpc.serialize<api_pb.BlockResponse>;
    responseDeserialize: grpc.deserialize<api_pb.BlockResponse>;
}
interface IDataAPIService_IGetUncleByHash extends grpc.MethodDefinition<api_pb.GetBlockByBlockHashRequest, api_pb.GetUncleByHashResponse> {
    path: "/service.DataAPI/GetUncleByHash";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetBlockByBlockHashRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetBlockByBlockHashRequest>;
    responseSerialize: grpc.serialize<api_pb.GetUncleByHashResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetUncleByHashResponse>;
}
interface IDataAPIService_IGetTransactionByHash extends grpc.MethodDefinition<api_pb.GetTransactionRequest, api_pb.GetTransactionResponse> {
    path: "/service.DataAPI/GetTransactionByHash";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetTransactionRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetTransactionRequest>;
    responseSerialize: grpc.serialize<api_pb.GetTransactionResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetTransactionResponse>;
}
interface IDataAPIService_IGetSearchTermType extends grpc.MethodDefinition<api_pb.GetSearchTermTypeRequest, api_pb.GetSearchTermTypeResponse> {
    path: "/service.DataAPI/GetSearchTermType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.GetSearchTermTypeRequest>;
    requestDeserialize: grpc.deserialize<api_pb.GetSearchTermTypeRequest>;
    responseSerialize: grpc.serialize<api_pb.GetSearchTermTypeResponse>;
    responseDeserialize: grpc.deserialize<api_pb.GetSearchTermTypeResponse>;
}
interface IDataAPIService_IListBlocks extends grpc.MethodDefinition<api_pb.PaginationRequest, api_pb.ListBlocksResponse> {
    path: "/service.DataAPI/ListBlocks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PaginationRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PaginationRequest>;
    responseSerialize: grpc.serialize<api_pb.ListBlocksResponse>;
    responseDeserialize: grpc.deserialize<api_pb.ListBlocksResponse>;
}
interface IDataAPIService_IListTransactions extends grpc.MethodDefinition<api_pb.PaginationRequest, api_pb.TransactionsListResponse> {
    path: "/service.DataAPI/ListTransactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PaginationRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PaginationRequest>;
    responseSerialize: grpc.serialize<api_pb.TransactionsListResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TransactionsListResponse>;
}
interface IDataAPIService_IListTransactionsByBlockNumber extends grpc.MethodDefinition<api_pb.ListTransactionsByBlockNumberRequest, api_pb.TransactionsListResponse> {
    path: "/service.DataAPI/ListTransactionsByBlockNumber";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.ListTransactionsByBlockNumberRequest>;
    requestDeserialize: grpc.deserialize<api_pb.ListTransactionsByBlockNumberRequest>;
    responseSerialize: grpc.serialize<api_pb.TransactionsListResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TransactionsListResponse>;
}
interface IDataAPIService_IListTransactionsByAddress extends grpc.MethodDefinition<api_pb.ListTransactionsByAddressRequest, api_pb.TransactionsListResponse> {
    path: "/service.DataAPI/ListTransactionsByAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.ListTransactionsByAddressRequest>;
    requestDeserialize: grpc.deserialize<api_pb.ListTransactionsByAddressRequest>;
    responseSerialize: grpc.serialize<api_pb.TransactionsListResponse>;
    responseDeserialize: grpc.deserialize<api_pb.TransactionsListResponse>;
}
interface IDataAPIService_IListErc20TokenTransfers extends grpc.MethodDefinition<api_pb.ListErc20TokenTransfersRequest, api_pb.ListErc20TokenTransfersResponse> {
    path: "/service.DataAPI/ListErc20TokenTransfers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.ListErc20TokenTransfersRequest>;
    requestDeserialize: grpc.deserialize<api_pb.ListErc20TokenTransfersRequest>;
    responseSerialize: grpc.serialize<api_pb.ListErc20TokenTransfersResponse>;
    responseDeserialize: grpc.deserialize<api_pb.ListErc20TokenTransfersResponse>;
}
interface IDataAPIService_IListTracesByBlockNumber extends grpc.MethodDefinition<api_pb.ListTracesByBlockNumberRequest, api_pb.ListTracesResponse> {
    path: "/service.DataAPI/ListTracesByBlockNumber";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.ListTracesByBlockNumberRequest>;
    requestDeserialize: grpc.deserialize<api_pb.ListTracesByBlockNumberRequest>;
    responseSerialize: grpc.serialize<api_pb.ListTracesResponse>;
    responseDeserialize: grpc.deserialize<api_pb.ListTracesResponse>;
}
interface IDataAPIService_IListTraces extends grpc.MethodDefinition<api_pb.PaginationRequest, api_pb.ListTracesResponse> {
    path: "/service.DataAPI/ListTraces";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.PaginationRequest>;
    requestDeserialize: grpc.deserialize<api_pb.PaginationRequest>;
    responseSerialize: grpc.serialize<api_pb.ListTracesResponse>;
    responseDeserialize: grpc.deserialize<api_pb.ListTracesResponse>;
}
interface IDataAPIService_IInspectAddress extends grpc.MethodDefinition<api_pb.InspectAddressRequest, api_pb.InspectAddressResponse> {
    path: "/service.DataAPI/InspectAddress";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_pb.InspectAddressRequest>;
    requestDeserialize: grpc.deserialize<api_pb.InspectAddressRequest>;
    responseSerialize: grpc.serialize<api_pb.InspectAddressResponse>;
    responseDeserialize: grpc.deserialize<api_pb.InspectAddressResponse>;
}

export const DataAPIService: IDataAPIService;

export interface IDataAPIServer {
    getBlockByBlockNumber: grpc.handleUnaryCall<api_pb.GetBlockByBlockNumberRequest, api_pb.BlockResponse>;
    getBlockByBlockHash: grpc.handleUnaryCall<api_pb.GetBlockByBlockHashRequest, api_pb.BlockResponse>;
    getUncleByHash: grpc.handleUnaryCall<api_pb.GetBlockByBlockHashRequest, api_pb.GetUncleByHashResponse>;
    getTransactionByHash: grpc.handleUnaryCall<api_pb.GetTransactionRequest, api_pb.GetTransactionResponse>;
    getSearchTermType: grpc.handleUnaryCall<api_pb.GetSearchTermTypeRequest, api_pb.GetSearchTermTypeResponse>;
    listBlocks: grpc.handleUnaryCall<api_pb.PaginationRequest, api_pb.ListBlocksResponse>;
    listTransactions: grpc.handleUnaryCall<api_pb.PaginationRequest, api_pb.TransactionsListResponse>;
    listTransactionsByBlockNumber: grpc.handleUnaryCall<api_pb.ListTransactionsByBlockNumberRequest, api_pb.TransactionsListResponse>;
    listTransactionsByAddress: grpc.handleUnaryCall<api_pb.ListTransactionsByAddressRequest, api_pb.TransactionsListResponse>;
    listErc20TokenTransfers: grpc.handleUnaryCall<api_pb.ListErc20TokenTransfersRequest, api_pb.ListErc20TokenTransfersResponse>;
    listTracesByBlockNumber: grpc.handleUnaryCall<api_pb.ListTracesByBlockNumberRequest, api_pb.ListTracesResponse>;
    listTraces: grpc.handleUnaryCall<api_pb.PaginationRequest, api_pb.ListTracesResponse>;
    inspectAddress: grpc.handleUnaryCall<api_pb.InspectAddressRequest, api_pb.InspectAddressResponse>;
}

export interface IDataAPIClient {
    getBlockByBlockNumber(request: api_pb.GetBlockByBlockNumberRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByBlockNumber(request: api_pb.GetBlockByBlockNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByBlockNumber(request: api_pb.GetBlockByBlockNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByBlockHash(request: api_pb.GetBlockByBlockHashRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByBlockHash(request: api_pb.GetBlockByBlockHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getBlockByBlockHash(request: api_pb.GetBlockByBlockHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    getUncleByHash(request: api_pb.GetBlockByBlockHashRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetUncleByHashResponse) => void): grpc.ClientUnaryCall;
    getUncleByHash(request: api_pb.GetBlockByBlockHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUncleByHashResponse) => void): grpc.ClientUnaryCall;
    getUncleByHash(request: api_pb.GetBlockByBlockHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUncleByHashResponse) => void): grpc.ClientUnaryCall;
    getTransactionByHash(request: api_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    getTransactionByHash(request: api_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    getTransactionByHash(request: api_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    getSearchTermType(request: api_pb.GetSearchTermTypeRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetSearchTermTypeResponse) => void): grpc.ClientUnaryCall;
    getSearchTermType(request: api_pb.GetSearchTermTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetSearchTermTypeResponse) => void): grpc.ClientUnaryCall;
    getSearchTermType(request: api_pb.GetSearchTermTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetSearchTermTypeResponse) => void): grpc.ClientUnaryCall;
    listBlocks(request: api_pb.PaginationRequest, callback: (error: grpc.ServiceError | null, response: api_pb.ListBlocksResponse) => void): grpc.ClientUnaryCall;
    listBlocks(request: api_pb.PaginationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.ListBlocksResponse) => void): grpc.ClientUnaryCall;
    listBlocks(request: api_pb.PaginationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.ListBlocksResponse) => void): grpc.ClientUnaryCall;
    listTransactions(request: api_pb.PaginationRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    listTransactions(request: api_pb.PaginationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    listTransactions(request: api_pb.PaginationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByBlockNumber(request: api_pb.ListTransactionsByBlockNumberRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByBlockNumber(request: api_pb.ListTransactionsByBlockNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByBlockNumber(request: api_pb.ListTransactionsByBlockNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByAddress(request: api_pb.ListTransactionsByAddressRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByAddress(request: api_pb.ListTransactionsByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    listTransactionsByAddress(request: api_pb.ListTransactionsByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    listErc20TokenTransfers(request: api_pb.ListErc20TokenTransfersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.ListErc20TokenTransfersResponse) => void): grpc.ClientUnaryCall;
    listErc20TokenTransfers(request: api_pb.ListErc20TokenTransfersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.ListErc20TokenTransfersResponse) => void): grpc.ClientUnaryCall;
    listErc20TokenTransfers(request: api_pb.ListErc20TokenTransfersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.ListErc20TokenTransfersResponse) => void): grpc.ClientUnaryCall;
    listTracesByBlockNumber(request: api_pb.ListTracesByBlockNumberRequest, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    listTracesByBlockNumber(request: api_pb.ListTracesByBlockNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    listTracesByBlockNumber(request: api_pb.ListTracesByBlockNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    listTraces(request: api_pb.PaginationRequest, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    listTraces(request: api_pb.PaginationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    listTraces(request: api_pb.PaginationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    inspectAddress(request: api_pb.InspectAddressRequest, callback: (error: grpc.ServiceError | null, response: api_pb.InspectAddressResponse) => void): grpc.ClientUnaryCall;
    inspectAddress(request: api_pb.InspectAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.InspectAddressResponse) => void): grpc.ClientUnaryCall;
    inspectAddress(request: api_pb.InspectAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.InspectAddressResponse) => void): grpc.ClientUnaryCall;
}

export class DataAPIClient extends grpc.Client implements IDataAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getBlockByBlockNumber(request: api_pb.GetBlockByBlockNumberRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByBlockNumber(request: api_pb.GetBlockByBlockNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByBlockNumber(request: api_pb.GetBlockByBlockNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByBlockHash(request: api_pb.GetBlockByBlockHashRequest, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByBlockHash(request: api_pb.GetBlockByBlockHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockByBlockHash(request: api_pb.GetBlockByBlockHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public getUncleByHash(request: api_pb.GetBlockByBlockHashRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetUncleByHashResponse) => void): grpc.ClientUnaryCall;
    public getUncleByHash(request: api_pb.GetBlockByBlockHashRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetUncleByHashResponse) => void): grpc.ClientUnaryCall;
    public getUncleByHash(request: api_pb.GetBlockByBlockHashRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetUncleByHashResponse) => void): grpc.ClientUnaryCall;
    public getTransactionByHash(request: api_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    public getTransactionByHash(request: api_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    public getTransactionByHash(request: api_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    public getSearchTermType(request: api_pb.GetSearchTermTypeRequest, callback: (error: grpc.ServiceError | null, response: api_pb.GetSearchTermTypeResponse) => void): grpc.ClientUnaryCall;
    public getSearchTermType(request: api_pb.GetSearchTermTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.GetSearchTermTypeResponse) => void): grpc.ClientUnaryCall;
    public getSearchTermType(request: api_pb.GetSearchTermTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.GetSearchTermTypeResponse) => void): grpc.ClientUnaryCall;
    public listBlocks(request: api_pb.PaginationRequest, callback: (error: grpc.ServiceError | null, response: api_pb.ListBlocksResponse) => void): grpc.ClientUnaryCall;
    public listBlocks(request: api_pb.PaginationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.ListBlocksResponse) => void): grpc.ClientUnaryCall;
    public listBlocks(request: api_pb.PaginationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.ListBlocksResponse) => void): grpc.ClientUnaryCall;
    public listTransactions(request: api_pb.PaginationRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    public listTransactions(request: api_pb.PaginationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    public listTransactions(request: api_pb.PaginationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByBlockNumber(request: api_pb.ListTransactionsByBlockNumberRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByBlockNumber(request: api_pb.ListTransactionsByBlockNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByBlockNumber(request: api_pb.ListTransactionsByBlockNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByAddress(request: api_pb.ListTransactionsByAddressRequest, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByAddress(request: api_pb.ListTransactionsByAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    public listTransactionsByAddress(request: api_pb.ListTransactionsByAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.TransactionsListResponse) => void): grpc.ClientUnaryCall;
    public listErc20TokenTransfers(request: api_pb.ListErc20TokenTransfersRequest, callback: (error: grpc.ServiceError | null, response: api_pb.ListErc20TokenTransfersResponse) => void): grpc.ClientUnaryCall;
    public listErc20TokenTransfers(request: api_pb.ListErc20TokenTransfersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.ListErc20TokenTransfersResponse) => void): grpc.ClientUnaryCall;
    public listErc20TokenTransfers(request: api_pb.ListErc20TokenTransfersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.ListErc20TokenTransfersResponse) => void): grpc.ClientUnaryCall;
    public listTracesByBlockNumber(request: api_pb.ListTracesByBlockNumberRequest, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    public listTracesByBlockNumber(request: api_pb.ListTracesByBlockNumberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    public listTracesByBlockNumber(request: api_pb.ListTracesByBlockNumberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    public listTraces(request: api_pb.PaginationRequest, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    public listTraces(request: api_pb.PaginationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    public listTraces(request: api_pb.PaginationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.ListTracesResponse) => void): grpc.ClientUnaryCall;
    public inspectAddress(request: api_pb.InspectAddressRequest, callback: (error: grpc.ServiceError | null, response: api_pb.InspectAddressResponse) => void): grpc.ClientUnaryCall;
    public inspectAddress(request: api_pb.InspectAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_pb.InspectAddressResponse) => void): grpc.ClientUnaryCall;
    public inspectAddress(request: api_pb.InspectAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_pb.InspectAddressResponse) => void): grpc.ClientUnaryCall;
}
