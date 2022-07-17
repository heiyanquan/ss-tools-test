import installer from './defaults'
export * from '@heiyanquan/components'
export * from '@heiyanquan/constants'
export * from '@heiyanquan/directives'
export * from '@heiyanquan/hooks'
export * from '@heiyanquan/tokens'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
