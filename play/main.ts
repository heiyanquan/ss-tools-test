import { createApp } from 'vue'
import ssEle from 'ss-ele'
import '@ss-ele/theme-chalk/src/index.scss'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App)
  app.use(ssEle)
  console.log(22, app)

  app.mount('#play')
})()
