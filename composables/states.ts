import { LogoType } from '~~/types/common'

export const useToken = () => useState<string>('token', () => 'ETH')
export const useDecimals = () => useState<number>('decimals', () => 18)
export const useLogo = () => useState<LogoType>('logo', () => LogoType.Default)
export const useLogoLight = () => useState<string>('logoLight', () => '')
export const useLogoDark = () => useState<string>('logoDark', () => '')
export const useErrorMessage500 = () => useState<string>('errorMessage500', () => 'Something went wrong :(')
export const useIsMainnet = () => useState<boolean>('isMainnet', () => false)
