import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import relativeTime from 'dayjs/plugin/relativeTime'
import { BigNumber } from 'ethers'
import { formatUnits, hexlify, hexZeroPad, base64 } from 'ethers/lib/utils'

export const useUtils = () => {
  dayjs.extend(utc)
  dayjs.extend(relativeTime)
  
  const tokenDecimals = useDecimals()

  const base64ToAddress = (value: string | Uint8Array) => {
    const str = value.toString()
    const hex = hexlify(base64.decode(str))
    const substr = hex.substring(2)

    if (substr.length <= 40) {
      const hexWithZeroPad = hexZeroPad(hex, 20)
      return hexWithZeroPad
    }

    return 'NOT AN ADDRESS'
  }

  const base64ToASCII = (value: string | Uint8Array) => {
    const str = value.toString()
    return atob(str)
  }

  const base64ToHex = (value: string | Uint8Array) => {
    const str = value.toString()
    return hexlify(base64.decode(str))
  }

  const base64ToHexZeroPad = (value: string | Uint8Array, length: number = 32) => {
    const str = value.toString()
    const hex = hexlify(base64.decode(str))
    const hexWithZeroPad = hexZeroPad(hex, length)
    return hexWithZeroPad
  }

  const base64ToNumber = (value: string | Uint8Array) => {
    const str = value.toString()
    const hex = hexlify(base64.decode(str))
    if (hex === '0x') {
      return BigNumber.from(0)
    } else {
      return BigNumber.from(hex)
    }
  }

  const blockReward = ((staticreward: string, transactionfees: string, burntfees: string | undefined = undefined) => {
    const staticReward = BigNumber.from(staticreward)
    const txFee = BigNumber.from(transactionfees)
    const burntFees = BigNumber.from(burntfees)

    let result = staticReward.add(txFee)
    if (burntFees) {
      result = result.sub(burntFees)
    }

    return result
  })

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
  }  

  const formatAddress = (address: string): string => {
    const first = address.substring(0, 8)
    const last = address.substring(address.length - 8)
    return first + '...' + last
  }

  const formatNumber = (n: number): string => {
    return n.toLocaleString('en-US')
  }

  const formatStringWithCommas = (value: string) => {
    return value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  }

  const formatToken = (value: string) => {
    return new Intl.NumberFormat('en', { maximumFractionDigits: 5 }).format(parseFloat(value))
  }

  const fromNow = (timestamp: number): string => {
    const date = dayjs.unix(timestamp).utc()
    return date.fromNow()
  }

  const getCurrentUTCDate = (timestamp: number, short: boolean = false): string => {
    if (short) {
      return dayjs.unix(timestamp).utc().format('YYYY-MM-DD hh:mm:ss');
    }
    return dayjs.unix(timestamp).utc().format('MMM-DD-YYYY hh:mm:ss A UTCZ');
  }

  const gasUsedPercent = (gasUsed: string, gasLimit: string) => {
    return (Number(gasUsed) / Number(gasLimit) * 100).toFixed(2)
  }

  const weiToGwei = (value: string) => {
    const bigNumber = BigNumber.from(value)
    const gwei = formatUnits(bigNumber, 'gwei')
    return gwei
  }

  const weiToToken = (value: string, formatted: boolean = false, decimals: number = tokenDecimals.value): string => {
    const bigNumber = BigNumber.from(value)
    const eth = formatUnits(bigNumber, decimals)

    if (formatted) {
      return new Intl.NumberFormat('en', { maximumFractionDigits: 5 }).format(parseFloat(eth))
    }

    return eth
  }

  return {
    base64ToAddress,
    base64ToASCII,
    base64ToHex,
    base64ToHexZeroPad,
    base64ToNumber,
    blockReward,
    capitalize,
    copyToClipboard,
    formatAddress,
    formatNumber,
    formatStringWithCommas,
    formatToken,
    fromNow,
    getCurrentUTCDate,
    gasUsedPercent,
    weiToGwei,
    weiToToken
  }
}
