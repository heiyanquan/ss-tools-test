import installer from './defaults'
export * from '@ss-ele/components'
export * from '@ss-ele/constants'
export * from '@ss-ele/directives'
export * from '@ss-ele/hooks'
export * from '@ss-ele/tokens'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
