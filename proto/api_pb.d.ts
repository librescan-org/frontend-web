// package: service
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PaginationRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): PaginationRequest;
    getOffset(): number;
    setOffset(value: number): PaginationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaginationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PaginationRequest): PaginationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaginationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaginationRequest;
    static deserializeBinaryFromReader(message: PaginationRequest, reader: jspb.BinaryReader): PaginationRequest;
}

export namespace PaginationRequest {
    export type AsObject = {
        limit: number,
        offset: number,
    }
}

export class tokenHolding extends jspb.Message { 
    getTokenaddress(): string;
    setTokenaddress(value: string): tokenHolding;
    getDecimals(): number;
    setDecimals(value: number): tokenHolding;
    getName(): string;
    setName(value: string): tokenHolding;
    getSymbol(): string;
    setSymbol(value: string): tokenHolding;
    getValue(): string;
    setValue(value: string): tokenHolding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): tokenHolding.AsObject;
    static toObject(includeInstance: boolean, msg: tokenHolding): tokenHolding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: tokenHolding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): tokenHolding;
    static deserializeBinaryFromReader(message: tokenHolding, reader: jspb.BinaryReader): tokenHolding;
}

export namespace tokenHolding {
    export type AsObject = {
        tokenaddress: string,
        decimals: number,
        name: string,
        symbol: string,
        value: string,
    }
}

export class walletStatistics extends jspb.Message { 
    getWeibalance(): string;
    setWeibalance(value: string): walletStatistics;
    clearTokenholdingsList(): void;
    getTokenholdingsList(): Array<tokenHolding>;
    setTokenholdingsList(value: Array<tokenHolding>): walletStatistics;
    addTokenholdings(value?: tokenHolding, index?: number): tokenHolding;

    hasFirsttxsent(): boolean;
    clearFirsttxsent(): void;
    getFirsttxsent(): string | undefined;
    setFirsttxsent(value: string): walletStatistics;

    hasLasttxsent(): boolean;
    clearLasttxsent(): void;
    getLasttxsent(): string | undefined;
    setLasttxsent(value: string): walletStatistics;

    hasQanaddressdata(): boolean;
    clearQanaddressdata(): void;
    getQanaddressdata(): qanAddressData | undefined;
    setQanaddressdata(value?: qanAddressData): walletStatistics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): walletStatistics.AsObject;
    static toObject(includeInstance: boolean, msg: walletStatistics): walletStatistics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: walletStatistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): walletStatistics;
    static deserializeBinaryFromReader(message: walletStatistics, reader: jspb.BinaryReader): walletStatistics;
}

export namespace walletStatistics {
    export type AsObject = {
        weibalance: string,
        tokenholdingsList: Array<tokenHolding.AsObject>,
        firsttxsent?: string,
        lasttxsent?: string,
        qanaddressdata?: qanAddressData.AsObject,
    }
}

export class qanAddressData extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): qanAddressData;
    getCreated(): number;
    setCreated(value: number): qanAddressData;
    getValiduntil(): number;
    setValiduntil(value: number): qanAddressData;
    getXlinkaddress(): Uint8Array | string;
    getXlinkaddress_asU8(): Uint8Array;
    getXlinkaddress_asB64(): string;
    setXlinkaddress(value: Uint8Array | string): qanAddressData;
    getPem(): string;
    setPem(value: string): qanAddressData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): qanAddressData.AsObject;
    static toObject(includeInstance: boolean, msg: qanAddressData): qanAddressData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: qanAddressData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): qanAddressData;
    static deserializeBinaryFromReader(message: qanAddressData, reader: jspb.BinaryReader): qanAddressData;
}

export namespace qanAddressData {
    export type AsObject = {
        version: number,
        created: number,
        validuntil: number,
        xlinkaddress: Uint8Array | string,
        pem: string,
    }
}

export class qanContractData extends jspb.Message { 
    getBinaryhash(): string;
    setBinaryhash(value: string): qanContractData;
    getSource(): string;
    setSource(value: string): qanContractData;
    getCompilerversion(): string;
    setCompilerversion(value: string): qanContractData;
    getCompressorversion(): string;
    setCompressorversion(value: string): qanContractData;
    getLanguage(): string;
    setLanguage(value: string): qanContractData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): qanContractData.AsObject;
    static toObject(includeInstance: boolean, msg: qanContractData): qanContractData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: qanContractData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): qanContractData;
    static deserializeBinaryFromReader(message: qanContractData, reader: jspb.BinaryReader): qanContractData;
}

export namespace qanContractData {
    export type AsObject = {
        binaryhash: string,
        source: string,
        compilerversion: string,
        compressorversion: string,
        language: string,
    }
}

export class contractData extends jspb.Message { 
    getCreatoraddress(): string;
    setCreatoraddress(value: string): contractData;
    getCreatortransaction(): string;
    setCreatortransaction(value: string): contractData;
    getBytecode(): Uint8Array | string;
    getBytecode_asU8(): Uint8Array;
    getBytecode_asB64(): string;
    setBytecode(value: Uint8Array | string): contractData;

    hasQancontractdata(): boolean;
    clearQancontractdata(): void;
    getQancontractdata(): qanContractData | undefined;
    setQancontractdata(value?: qanContractData): contractData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): contractData.AsObject;
    static toObject(includeInstance: boolean, msg: contractData): contractData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: contractData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): contractData;
    static deserializeBinaryFromReader(message: contractData, reader: jspb.BinaryReader): contractData;
}

export namespace contractData {
    export type AsObject = {
        creatoraddress: string,
        creatortransaction: string,
        bytecode: Uint8Array | string,
        qancontractdata?: qanContractData.AsObject,
    }
}

export class tokenStatistics extends jspb.Message { 
    getTokenaddress(): string;
    setTokenaddress(value: string): tokenStatistics;
    getDecimals(): number;
    setDecimals(value: number): tokenStatistics;
    getName(): string;
    setName(value: string): tokenStatistics;
    getSymbol(): string;
    setSymbol(value: string): tokenStatistics;
    getMaxtotalsupply(): string;
    setMaxtotalsupply(value: string): tokenStatistics;
    getHolders(): string;
    setHolders(value: string): tokenStatistics;
    getTotaltransfers(): string;
    setTotaltransfers(value: string): tokenStatistics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): tokenStatistics.AsObject;
    static toObject(includeInstance: boolean, msg: tokenStatistics): tokenStatistics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: tokenStatistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): tokenStatistics;
    static deserializeBinaryFromReader(message: tokenStatistics, reader: jspb.BinaryReader): tokenStatistics;
}

export namespace tokenStatistics {
    export type AsObject = {
        tokenaddress: string,
        decimals: number,
        name: string,
        symbol: string,
        maxtotalsupply: string,
        holders: string,
        totaltransfers: string,
    }
}

export class InspectAddressResponse extends jspb.Message { 

    hasWalletstatistics(): boolean;
    clearWalletstatistics(): void;
    getWalletstatistics(): walletStatistics | undefined;
    setWalletstatistics(value?: walletStatistics): InspectAddressResponse;

    hasContractdata(): boolean;
    clearContractdata(): void;
    getContractdata(): contractData | undefined;
    setContractdata(value?: contractData): InspectAddressResponse;

    hasTokenstatistics(): boolean;
    clearTokenstatistics(): void;
    getTokenstatistics(): tokenStatistics | undefined;
    setTokenstatistics(value?: tokenStatistics): InspectAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InspectAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InspectAddressResponse): InspectAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InspectAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InspectAddressResponse;
    static deserializeBinaryFromReader(message: InspectAddressResponse, reader: jspb.BinaryReader): InspectAddressResponse;
}

export namespace InspectAddressResponse {
    export type AsObject = {
        walletstatistics?: walletStatistics.AsObject,
        contractdata?: contractData.AsObject,
        tokenstatistics?: tokenStatistics.AsObject,
    }
}

export class InspectAddressRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): InspectAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InspectAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InspectAddressRequest): InspectAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InspectAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InspectAddressRequest;
    static deserializeBinaryFromReader(message: InspectAddressRequest, reader: jspb.BinaryReader): InspectAddressRequest;
}

export namespace InspectAddressRequest {
    export type AsObject = {
        address: string,
    }
}

export class ListTracesByBlockNumberRequest extends jspb.Message { 
    getBlocknumber(): number;
    setBlocknumber(value: number): ListTracesByBlockNumberRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): PaginationRequest | undefined;
    setPagination(value?: PaginationRequest): ListTracesByBlockNumberRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTracesByBlockNumberRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTracesByBlockNumberRequest): ListTracesByBlockNumberRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTracesByBlockNumberRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTracesByBlockNumberRequest;
    static deserializeBinaryFromReader(message: ListTracesByBlockNumberRequest, reader: jspb.BinaryReader): ListTracesByBlockNumberRequest;
}

export namespace ListTracesByBlockNumberRequest {
    export type AsObject = {
        blocknumber: number,
        pagination?: PaginationRequest.AsObject,
    }
}

export class ListTracesResponse extends jspb.Message { 
    clearTracesList(): void;
    getTracesList(): Array<Trace>;
    setTracesList(value: Array<Trace>): ListTracesResponse;
    addTraces(value?: Trace, index?: number): Trace;
    getTotalrecords(): number;
    setTotalrecords(value: number): ListTracesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTracesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTracesResponse): ListTracesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTracesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTracesResponse;
    static deserializeBinaryFromReader(message: ListTracesResponse, reader: jspb.BinaryReader): ListTracesResponse;
}

export namespace ListTracesResponse {
    export type AsObject = {
        tracesList: Array<Trace.AsObject>,
        totalrecords: number,
    }
}

export class GetUncleByHashResponse extends jspb.Message { 

    hasUncle(): boolean;
    clearUncle(): void;
    getUncle(): uncle | undefined;
    setUncle(value?: uncle): GetUncleByHashResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUncleByHashResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUncleByHashResponse): GetUncleByHashResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUncleByHashResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUncleByHashResponse;
    static deserializeBinaryFromReader(message: GetUncleByHashResponse, reader: jspb.BinaryReader): GetUncleByHashResponse;
}

export namespace GetUncleByHashResponse {
    export type AsObject = {
        uncle?: uncle.AsObject,
    }
}

export class Trace extends jspb.Message { 
    getTransactionhash(): string;
    setTransactionhash(value: string): Trace;
    getIndex(): number;
    setIndex(value: number): Trace;
    getCalltype(): string;
    setCalltype(value: string): Trace;
    getInput(): Uint8Array | string;
    getInput_asU8(): Uint8Array;
    getInput_asB64(): string;
    setInput(value: Uint8Array | string): Trace;
    getFromaddress(): string;
    setFromaddress(value: string): Trace;
    getToaddress(): string;
    setToaddress(value: string): Trace;
    getValue(): string;
    setValue(value: string): Trace;
    getGas(): string;
    setGas(value: string): Trace;

    hasError(): boolean;
    clearError(): void;
    getError(): string | undefined;
    setError(value: string): Trace;
    getBlocknumber(): number;
    setBlocknumber(value: number): Trace;
    getBlocktimestamp(): number;
    setBlocktimestamp(value: number): Trace;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Trace.AsObject;
    static toObject(includeInstance: boolean, msg: Trace): Trace.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Trace, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Trace;
    static deserializeBinaryFromReader(message: Trace, reader: jspb.BinaryReader): Trace;
}

export namespace Trace {
    export type AsObject = {
        transactionhash: string,
        index: number,
        calltype: string,
        input: Uint8Array | string,
        fromaddress: string,
        toaddress: string,
        value: string,
        gas: string,
        error?: string,
        blocknumber: number,
        blocktimestamp: number,
    }
}

export class StateChange extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): StateChange;
    getBalancebefore(): string;
    setBalancebefore(value: string): StateChange;
    getBalanceafter(): string;
    setBalanceafter(value: string): StateChange;

    hasNoncebefore(): boolean;
    clearNoncebefore(): void;
    getNoncebefore(): string | undefined;
    setNoncebefore(value: string): StateChange;

    hasNonceafter(): boolean;
    clearNonceafter(): void;
    getNonceafter(): string | undefined;
    setNonceafter(value: string): StateChange;
    clearStoragechangesList(): void;
    getStoragechangesList(): Array<StorageChange>;
    setStoragechangesList(value: Array<StorageChange>): StateChange;
    addStoragechanges(value?: StorageChange, index?: number): StorageChange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StateChange.AsObject;
    static toObject(includeInstance: boolean, msg: StateChange): StateChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StateChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StateChange;
    static deserializeBinaryFromReader(message: StateChange, reader: jspb.BinaryReader): StateChange;
}

export namespace StateChange {
    export type AsObject = {
        address: string,
        balancebefore: string,
        balanceafter: string,
        noncebefore?: string,
        nonceafter?: string,
        storagechangesList: Array<StorageChange.AsObject>,
    }
}

export class StorageChange extends jspb.Message { 
    getStorageaddress(): Uint8Array | string;
    getStorageaddress_asU8(): Uint8Array;
    getStorageaddress_asB64(): string;
    setStorageaddress(value: Uint8Array | string): StorageChange;
    getValuebefore(): Uint8Array | string;
    getValuebefore_asU8(): Uint8Array;
    getValuebefore_asB64(): string;
    setValuebefore(value: Uint8Array | string): StorageChange;
    getValueafter(): Uint8Array | string;
    getValueafter_asU8(): Uint8Array;
    getValueafter_asB64(): string;
    setValueafter(value: Uint8Array | string): StorageChange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageChange.AsObject;
    static toObject(includeInstance: boolean, msg: StorageChange): StorageChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageChange;
    static deserializeBinaryFromReader(message: StorageChange, reader: jspb.BinaryReader): StorageChange;
}

export namespace StorageChange {
    export type AsObject = {
        storageaddress: Uint8Array | string,
        valuebefore: Uint8Array | string,
        valueafter: Uint8Array | string,
    }
}

export class GetSearchTermTypeRequest extends jspb.Message { 
    getSearchterm(): string;
    setSearchterm(value: string): GetSearchTermTypeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSearchTermTypeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSearchTermTypeRequest): GetSearchTermTypeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSearchTermTypeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSearchTermTypeRequest;
    static deserializeBinaryFromReader(message: GetSearchTermTypeRequest, reader: jspb.BinaryReader): GetSearchTermTypeRequest;
}

export namespace GetSearchTermTypeRequest {
    export type AsObject = {
        searchterm: string,
    }
}

export class GetSearchTermTypeResponse extends jspb.Message { 
    getType(): GetSearchTermTypeResponse.SearchTermType;
    setType(value: GetSearchTermTypeResponse.SearchTermType): GetSearchTermTypeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSearchTermTypeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSearchTermTypeResponse): GetSearchTermTypeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSearchTermTypeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSearchTermTypeResponse;
    static deserializeBinaryFromReader(message: GetSearchTermTypeResponse, reader: jspb.BinaryReader): GetSearchTermTypeResponse;
}

export namespace GetSearchTermTypeResponse {
    export type AsObject = {
        type: GetSearchTermTypeResponse.SearchTermType,
    }

    export enum SearchTermType {
    ADDRESS = 0,
    TRANSACTION = 1,
    BLOCKHASH = 2,
    BLOCKNUMBER = 3,
    }

}

export class ListTransactionsByBlockNumberRequest extends jspb.Message { 
    getBlocknumber(): number;
    setBlocknumber(value: number): ListTransactionsByBlockNumberRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): PaginationRequest | undefined;
    setPagination(value?: PaginationRequest): ListTransactionsByBlockNumberRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsByBlockNumberRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsByBlockNumberRequest): ListTransactionsByBlockNumberRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsByBlockNumberRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsByBlockNumberRequest;
    static deserializeBinaryFromReader(message: ListTransactionsByBlockNumberRequest, reader: jspb.BinaryReader): ListTransactionsByBlockNumberRequest;
}

export namespace ListTransactionsByBlockNumberRequest {
    export type AsObject = {
        blocknumber: number,
        pagination?: PaginationRequest.AsObject,
    }
}

export class Block extends jspb.Message { 
    getHash(): string;
    setHash(value: string): Block;
    getNumber(): number;
    setNumber(value: number): Block;
    getParenthash(): string;
    setParenthash(value: string): Block;
    getNonce(): string;
    setNonce(value: string): Block;
    getSha3uncles(): string;
    setSha3uncles(value: string): Block;
    getLogsbloom(): Uint8Array | string;
    getLogsbloom_asU8(): Uint8Array;
    getLogsbloom_asB64(): string;
    setLogsbloom(value: Uint8Array | string): Block;
    getStateroot(): string;
    setStateroot(value: string): Block;
    getMiner(): string;
    setMiner(value: string): Block;
    getDifficulty(): string;
    setDifficulty(value: string): Block;
    getTotaldifficulty(): string;
    setTotaldifficulty(value: string): Block;
    getSize(): string;
    setSize(value: string): Block;
    getExtradata(): Uint8Array | string;
    getExtradata_asU8(): Uint8Array;
    getExtradata_asB64(): string;
    setExtradata(value: Uint8Array | string): Block;
    getGaslimit(): string;
    setGaslimit(value: string): Block;
    getGasused(): string;
    setGasused(value: string): Block;
    getTimestamp(): number;
    setTimestamp(value: number): Block;
    getTransactioncount(): number;
    setTransactioncount(value: number): Block;
    getTracecount(): number;
    setTracecount(value: number): Block;

    hasBasefeepergas(): boolean;
    clearBasefeepergas(): void;
    getBasefeepergas(): string | undefined;
    setBasefeepergas(value: string): Block;

    hasBurntfees(): boolean;
    clearBurntfees(): void;
    getBurntfees(): string | undefined;
    setBurntfees(value: string): Block;
    getTransactionfees(): string;
    setTransactionfees(value: string): Block;
    getStaticreward(): string;
    setStaticreward(value: string): Block;
    clearUnclesList(): void;
    getUnclesList(): Array<uncle>;
    setUnclesList(value: Array<uncle>): Block;
    addUncles(value?: uncle, index?: number): uncle;
    getMixhash(): string;
    setMixhash(value: string): Block;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Block.AsObject;
    static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Block;
    static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
    export type AsObject = {
        hash: string,
        number: number,
        parenthash: string,
        nonce: string,
        sha3uncles: string,
        logsbloom: Uint8Array | string,
        stateroot: string,
        miner: string,
        difficulty: string,
        totaldifficulty: string,
        size: string,
        extradata: Uint8Array | string,
        gaslimit: string,
        gasused: string,
        timestamp: number,
        transactioncount: number,
        tracecount: number,
        basefeepergas?: string,
        burntfees?: string,
        transactionfees: string,
        staticreward: string,
        unclesList: Array<uncle.AsObject>,
        mixhash: string,
    }
}

export class Withdrawal extends jspb.Message { 
    getBlockhash(): string;
    setBlockhash(value: string): Withdrawal;
    getIndex(): number;
    setIndex(value: number): Withdrawal;
    getValidatorindex(): number;
    setValidatorindex(value: number): Withdrawal;
    getAmount(): string;
    setAmount(value: string): Withdrawal;
    getAddress(): string;
    setAddress(value: string): Withdrawal;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Withdrawal.AsObject;
    static toObject(includeInstance: boolean, msg: Withdrawal): Withdrawal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Withdrawal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Withdrawal;
    static deserializeBinaryFromReader(message: Withdrawal, reader: jspb.BinaryReader): Withdrawal;
}

export namespace Withdrawal {
    export type AsObject = {
        blockhash: string,
        index: number,
        validatorindex: number,
        amount: string,
        address: string,
    }
}

export class uncle extends jspb.Message { 
    getNephewnumber(): number;
    setNephewnumber(value: number): uncle;
    getHash(): string;
    setHash(value: string): uncle;
    getNumber(): number;
    setNumber(value: number): uncle;
    getParenthash(): string;
    setParenthash(value: string): uncle;
    getMiner(): string;
    setMiner(value: string): uncle;
    getDifficulty(): string;
    setDifficulty(value: string): uncle;
    getGaslimit(): string;
    setGaslimit(value: string): uncle;
    getGasused(): string;
    setGasused(value: string): uncle;
    getTimestamp(): number;
    setTimestamp(value: number): uncle;
    getReward(): string;
    setReward(value: string): uncle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): uncle.AsObject;
    static toObject(includeInstance: boolean, msg: uncle): uncle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: uncle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): uncle;
    static deserializeBinaryFromReader(message: uncle, reader: jspb.BinaryReader): uncle;
}

export namespace uncle {
    export type AsObject = {
        nephewnumber: number,
        hash: string,
        number: number,
        parenthash: string,
        miner: string,
        difficulty: string,
        gaslimit: string,
        gasused: string,
        timestamp: number,
        reward: string,
    }
}

export class ListBlocksResponse extends jspb.Message { 
    clearBlocksList(): void;
    getBlocksList(): Array<Block>;
    setBlocksList(value: Array<Block>): ListBlocksResponse;
    addBlocks(value?: Block, index?: number): Block;
    getTotalrecords(): number;
    setTotalrecords(value: number): ListBlocksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBlocksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBlocksResponse): ListBlocksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBlocksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBlocksResponse;
    static deserializeBinaryFromReader(message: ListBlocksResponse, reader: jspb.BinaryReader): ListBlocksResponse;
}

export namespace ListBlocksResponse {
    export type AsObject = {
        blocksList: Array<Block.AsObject>,
        totalrecords: number,
    }
}

export class BlockResponse extends jspb.Message { 

    hasBlock(): boolean;
    clearBlock(): void;
    getBlock(): Block | undefined;
    setBlock(value?: Block): BlockResponse;

    hasLatestblocknumber(): boolean;
    clearLatestblocknumber(): void;
    getLatestblocknumber(): number | undefined;
    setLatestblocknumber(value: number): BlockResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlockResponse): BlockResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockResponse;
    static deserializeBinaryFromReader(message: BlockResponse, reader: jspb.BinaryReader): BlockResponse;
}

export namespace BlockResponse {
    export type AsObject = {
        block?: Block.AsObject,
        latestblocknumber?: number,
    }
}

export class GetBlockByBlockNumberRequest extends jspb.Message { 
    getNumber(): number;
    setNumber(value: number): GetBlockByBlockNumberRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockByBlockNumberRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockByBlockNumberRequest): GetBlockByBlockNumberRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockByBlockNumberRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockByBlockNumberRequest;
    static deserializeBinaryFromReader(message: GetBlockByBlockNumberRequest, reader: jspb.BinaryReader): GetBlockByBlockNumberRequest;
}

export namespace GetBlockByBlockNumberRequest {
    export type AsObject = {
        number: number,
    }
}

export class GetBlockByBlockHashRequest extends jspb.Message { 
    getHash(): string;
    setHash(value: string): GetBlockByBlockHashRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBlockByBlockHashRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBlockByBlockHashRequest): GetBlockByBlockHashRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBlockByBlockHashRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBlockByBlockHashRequest;
    static deserializeBinaryFromReader(message: GetBlockByBlockHashRequest, reader: jspb.BinaryReader): GetBlockByBlockHashRequest;
}

export namespace GetBlockByBlockHashRequest {
    export type AsObject = {
        hash: string,
    }
}

export class ListTransactionsByAddressRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): ListTransactionsByAddressRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): PaginationRequest | undefined;
    setPagination(value?: PaginationRequest): ListTransactionsByAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsByAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsByAddressRequest): ListTransactionsByAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsByAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsByAddressRequest;
    static deserializeBinaryFromReader(message: ListTransactionsByAddressRequest, reader: jspb.BinaryReader): ListTransactionsByAddressRequest;
}

export namespace ListTransactionsByAddressRequest {
    export type AsObject = {
        address: string,
        pagination?: PaginationRequest.AsObject,
    }
}

export class TransactionsListResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<Transaction>;
    setTransactionsList(value: Array<Transaction>): TransactionsListResponse;
    addTransactions(value?: Transaction, index?: number): Transaction;
    getTotalrecords(): number;
    setTotalrecords(value: number): TransactionsListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionsListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionsListResponse): TransactionsListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionsListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionsListResponse;
    static deserializeBinaryFromReader(message: TransactionsListResponse, reader: jspb.BinaryReader): TransactionsListResponse;
}

export namespace TransactionsListResponse {
    export type AsObject = {
        transactionsList: Array<Transaction.AsObject>,
        totalrecords: number,
    }
}

export class Transaction extends jspb.Message { 
    getHash(): string;
    setHash(value: string): Transaction;
    getMethod(): string;
    setMethod(value: string): Transaction;
    getIndex(): number;
    setIndex(value: number): Transaction;
    getNonce(): string;
    setNonce(value: string): Transaction;
    getBlockhash(): string;
    setBlockhash(value: string): Transaction;
    getBlocknumber(): number;
    setBlocknumber(value: number): Transaction;
    getFromaddress(): string;
    setFromaddress(value: string): Transaction;
    getToaddress(): string;
    setToaddress(value: string): Transaction;
    getValue(): string;
    setValue(value: string): Transaction;
    getGas(): string;
    setGas(value: string): Transaction;
    getGasused(): string;
    setGasused(value: string): Transaction;
    getGasprice(): string;
    setGasprice(value: string): Transaction;
    getInput(): Uint8Array | string;
    getInput_asU8(): Uint8Array;
    getInput_asB64(): string;
    setInput(value: Uint8Array | string): Transaction;
    clearAccessobjectsList(): void;
    getAccessobjectsList(): Array<accessObject>;
    setAccessobjectsList(value: Array<accessObject>): Transaction;
    addAccessobjects(value?: accessObject, index?: number): accessObject;
    getBlocktimestamp(): number;
    setBlocktimestamp(value: number): Transaction;

    hasMaxfeepergas(): boolean;
    clearMaxfeepergas(): void;
    getMaxfeepergas(): string | undefined;
    setMaxfeepergas(value: string): Transaction;

    hasMaxpriorityfeepergas(): boolean;
    clearMaxpriorityfeepergas(): void;
    getMaxpriorityfeepergas(): string | undefined;
    setMaxpriorityfeepergas(value: string): Transaction;

    hasBasefeepergas(): boolean;
    clearBasefeepergas(): void;
    getBasefeepergas(): string | undefined;
    setBasefeepergas(value: string): Transaction;
    getTransactiontype(): number;
    setTransactiontype(value: number): Transaction;
    getTransactionfee(): string;
    setTransactionfee(value: string): Transaction;
    getReceiptcumulativegasused(): string;
    setReceiptcumulativegasused(value: string): Transaction;
    getReceiptstatus(): Transaction.receiptStatus;
    setReceiptstatus(value: Transaction.receiptStatus): Transaction;

    hasQantransactioninput(): boolean;
    clearQantransactioninput(): void;
    getQantransactioninput(): qanTransactionInput | undefined;
    setQantransactioninput(value?: qanTransactionInput): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        hash: string,
        method: string,
        index: number,
        nonce: string,
        blockhash: string,
        blocknumber: number,
        fromaddress: string,
        toaddress: string,
        value: string,
        gas: string,
        gasused: string,
        gasprice: string,
        input: Uint8Array | string,
        accessobjectsList: Array<accessObject.AsObject>,
        blocktimestamp: number,
        maxfeepergas?: string,
        maxpriorityfeepergas?: string,
        basefeepergas?: string,
        transactiontype: number,
        transactionfee: string,
        receiptcumulativegasused: string,
        receiptstatus: Transaction.receiptStatus,
        qantransactioninput?: qanTransactionInput.AsObject,
    }

    export enum receiptStatus {
    FAILURE = 0,
    SUCCESS = 1,
    }

}

export class qanTransactionInput extends jspb.Message { 
    getMemory(): number;
    setMemory(value: number): qanTransactionInput;
    getMethod(): string;
    setMethod(value: string): qanTransactionInput;
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): qanTransactionInput;
    addArgs(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): qanTransactionInput.AsObject;
    static toObject(includeInstance: boolean, msg: qanTransactionInput): qanTransactionInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: qanTransactionInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): qanTransactionInput;
    static deserializeBinaryFromReader(message: qanTransactionInput, reader: jspb.BinaryReader): qanTransactionInput;
}

export namespace qanTransactionInput {
    export type AsObject = {
        memory: number,
        method: string,
        argsList: Array<string>,
    }
}

export class accessObject extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): accessObject;
    clearStoragekeysList(): void;
    getStoragekeysList(): Array<Uint8Array | string>;
    getStoragekeysList_asU8(): Array<Uint8Array>;
    getStoragekeysList_asB64(): Array<string>;
    setStoragekeysList(value: Array<Uint8Array | string>): accessObject;
    addStoragekeys(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): accessObject.AsObject;
    static toObject(includeInstance: boolean, msg: accessObject): accessObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: accessObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): accessObject;
    static deserializeBinaryFromReader(message: accessObject, reader: jspb.BinaryReader): accessObject;
}

export namespace accessObject {
    export type AsObject = {
        address: string,
        storagekeysList: Array<Uint8Array | string>,
    }
}

export class GetTransactionRequest extends jspb.Message { 
    getHash(): string;
    setHash(value: string): GetTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
    static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
    export type AsObject = {
        hash: string,
    }
}

export class GetTransactionResponse extends jspb.Message { 

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): Transaction | undefined;
    setTransaction(value?: Transaction): GetTransactionResponse;
    clearLogsList(): void;
    getLogsList(): Array<Log>;
    setLogsList(value: Array<Log>): GetTransactionResponse;
    addLogs(value?: Log, index?: number): Log;
    clearTracesList(): void;
    getTracesList(): Array<Trace>;
    setTracesList(value: Array<Trace>): GetTransactionResponse;
    addTraces(value?: Trace, index?: number): Trace;
    clearStatechangesList(): void;
    getStatechangesList(): Array<StateChange>;
    setStatechangesList(value: Array<StateChange>): GetTransactionResponse;
    addStatechanges(value?: StateChange, index?: number): StateChange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionResponse): GetTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionResponse;
    static deserializeBinaryFromReader(message: GetTransactionResponse, reader: jspb.BinaryReader): GetTransactionResponse;
}

export namespace GetTransactionResponse {
    export type AsObject = {
        transaction?: Transaction.AsObject,
        logsList: Array<Log.AsObject>,
        tracesList: Array<Trace.AsObject>,
        statechangesList: Array<StateChange.AsObject>,
    }
}

export class Log extends jspb.Message { 
    getIndex(): number;
    setIndex(value: number): Log;
    getAddress(): string;
    setAddress(value: string): Log;

    hasEventsignature(): boolean;
    clearEventsignature(): void;
    getEventsignature(): string | undefined;
    setEventsignature(value: string): Log;

    hasTopic0(): boolean;
    clearTopic0(): void;
    getTopic0(): Uint8Array | string;
    getTopic0_asU8(): Uint8Array;
    getTopic0_asB64(): string;
    setTopic0(value: Uint8Array | string): Log;

    hasTopic1(): boolean;
    clearTopic1(): void;
    getTopic1(): Uint8Array | string;
    getTopic1_asU8(): Uint8Array;
    getTopic1_asB64(): string;
    setTopic1(value: Uint8Array | string): Log;

    hasTopic2(): boolean;
    clearTopic2(): void;
    getTopic2(): Uint8Array | string;
    getTopic2_asU8(): Uint8Array;
    getTopic2_asB64(): string;
    setTopic2(value: Uint8Array | string): Log;

    hasTopic3(): boolean;
    clearTopic3(): void;
    getTopic3(): Uint8Array | string;
    getTopic3_asU8(): Uint8Array;
    getTopic3_asB64(): string;
    setTopic3(value: Uint8Array | string): Log;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Log;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Log.AsObject;
    static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Log;
    static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
    export type AsObject = {
        index: number,
        address: string,
        eventsignature?: string,
        topic0: Uint8Array | string,
        topic1: Uint8Array | string,
        topic2: Uint8Array | string,
        topic3: Uint8Array | string,
        data: Uint8Array | string,
    }
}

export class ListErc20TokenTransfersRequest extends jspb.Message { 

    hasTokenaddress(): boolean;
    clearTokenaddress(): void;
    getTokenaddress(): string | undefined;
    setTokenaddress(value: string): ListErc20TokenTransfersRequest;

    hasFromortoaddress(): boolean;
    clearFromortoaddress(): void;
    getFromortoaddress(): string | undefined;
    setFromortoaddress(value: string): ListErc20TokenTransfersRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): PaginationRequest | undefined;
    setPagination(value?: PaginationRequest): ListErc20TokenTransfersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListErc20TokenTransfersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListErc20TokenTransfersRequest): ListErc20TokenTransfersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListErc20TokenTransfersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListErc20TokenTransfersRequest;
    static deserializeBinaryFromReader(message: ListErc20TokenTransfersRequest, reader: jspb.BinaryReader): ListErc20TokenTransfersRequest;
}

export namespace ListErc20TokenTransfersRequest {
    export type AsObject = {
        tokenaddress?: string,
        fromortoaddress?: string,
        pagination?: PaginationRequest.AsObject,
    }
}

export class ListErc20TokenTransfersResponse extends jspb.Message { 
    clearErc20tokentransferList(): void;
    getErc20tokentransferList(): Array<erc20TokenTransfer>;
    setErc20tokentransferList(value: Array<erc20TokenTransfer>): ListErc20TokenTransfersResponse;
    addErc20tokentransfer(value?: erc20TokenTransfer, index?: number): erc20TokenTransfer;
    getTotalrecords(): number;
    setTotalrecords(value: number): ListErc20TokenTransfersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListErc20TokenTransfersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListErc20TokenTransfersResponse): ListErc20TokenTransfersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListErc20TokenTransfersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListErc20TokenTransfersResponse;
    static deserializeBinaryFromReader(message: ListErc20TokenTransfersResponse, reader: jspb.BinaryReader): ListErc20TokenTransfersResponse;
}

export namespace ListErc20TokenTransfersResponse {
    export type AsObject = {
        erc20tokentransferList: Array<erc20TokenTransfer.AsObject>,
        totalrecords: number,
    }
}

export class erc20TokenTransfer extends jspb.Message { 
    getMethod(): string;
    setMethod(value: string): erc20TokenTransfer;
    getBlocktimestamp(): number;
    setBlocktimestamp(value: number): erc20TokenTransfer;
    getTokenname(): string;
    setTokenname(value: string): erc20TokenTransfer;
    getTokensymbol(): string;
    setTokensymbol(value: string): erc20TokenTransfer;
    getTransactionhash(): string;
    setTransactionhash(value: string): erc20TokenTransfer;
    getLogindex(): number;
    setLogindex(value: number): erc20TokenTransfer;
    getTokenaddress(): string;
    setTokenaddress(value: string): erc20TokenTransfer;
    getFromaddress(): string;
    setFromaddress(value: string): erc20TokenTransfer;
    getToaddress(): string;
    setToaddress(value: string): erc20TokenTransfer;
    getValue(): string;
    setValue(value: string): erc20TokenTransfer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): erc20TokenTransfer.AsObject;
    static toObject(includeInstance: boolean, msg: erc20TokenTransfer): erc20TokenTransfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: erc20TokenTransfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): erc20TokenTransfer;
    static deserializeBinaryFromReader(message: erc20TokenTransfer, reader: jspb.BinaryReader): erc20TokenTransfer;
}

export namespace erc20TokenTransfer {
    export type AsObject = {
        method: string,
        blocktimestamp: number,
        tokenname: string,
        tokensymbol: string,
        transactionhash: string,
        logindex: number,
        tokenaddress: string,
        fromaddress: string,
        toaddress: string,
        value: string,
    }
}
