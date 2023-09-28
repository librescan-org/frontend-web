import * as api_pb from '~~/proto/api_pb'

export interface AddressOverview {
  contractdata?: api_pb.contractData.AsObject
  tokenstatistics?: api_pb.tokenStatistics.AsObject
  walletstatistics: api_pb.walletStatistics.AsObject | undefined
}

export enum AddressType {
  Address = 'ADDRESS',
  Contract = 'CONTRACT',
  Token = 'TOKEN',
  Unknown = 'UNKNOWN'
}

export enum BoxType {
  Square = 'SQUARE',
  Circle = 'CIRCLE'
}

export enum ButtonStyle {
  Small = 'SMALL',
  Normal = 'NORMAL'
}

export enum ButtonType {
  Button = 'BUTTON',
  Link = 'LINK'
}

export enum ButtonTarget {
  Self = '_SELF',
  Blank = '_BLANK'
}

export interface CoinType {
  id: string
  symbol: string
  name: string
}

export enum DateFormat {
  Timestamp = 'TIMESTAMP',
  Date = 'DATE'
}

export enum DataType {
  Hex = 'HEX',
  Utf8 = 'UTF-8'
}

export enum FormInputType {
  Text = 'TEXT',
  Password = 'PASSWORD',
  Number = 'NUMBER'
}

export enum GoToBlockDirection {
  Next = 'NEXT',
  Prev = 'PREV'
}

export enum HeaderType {
  Simple = 'SIMPLE',
  WithSearch = 'WITH_SEARCH'
}

export enum LabelType {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
  Success = 'SUCCESS',
  Danger = 'DANGER',
  Warning = 'WARNING'
}

export enum ListItemType {
  Blocks = 'BLOCKS',
  Txs = 'TXS'
}

export enum LogoType {
  Custom = 'CUSTOM',
  Default = 'DEFAULT',
  QAN = 'QAN'
}

export enum SearchType {
  Address = 0,
  Transaction = 1,
  BlockHash = 2,
  BlockNumber = 3
}

export interface TabbedPaneType {
  id: number
  name: string
  active: boolean
}

export enum TableValign {
  Middle = 'MIDDLE',
  Top = 'TOP'
}

export enum TooltipAlign {
  Left = 'LEFT',
  Center = 'CENTER'
}

export enum TxInputFormat {
  RawHEX = 'RAW_HEX',
  UTF8 = 'UTF-8'
}
