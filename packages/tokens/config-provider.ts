import type { InjectionKey, Ref } from 'vue'

export type ConfigProviderContext = Partial

export const configProviderContextKey: InjectionKey<
  Ref<ConfigProviderContext>
> = Symbol()
