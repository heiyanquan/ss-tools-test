// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    ElButton: typeof import('../packages/ss-ele')['ElButton']
  }

  interface ComponentCustomProperties {}
}

export {}
