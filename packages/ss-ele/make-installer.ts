import { provideGlobalConfig } from '@ss-ele/hooks'
import { INSTALLED_KEY } from '@ss-ele/constants'
import { version } from './version'
import type { App, Plugin } from '@vue/runtime-core'
import type { ConfigProviderContext } from '@ss-ele/tokens'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: ConfigProviderContext) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
    if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}
