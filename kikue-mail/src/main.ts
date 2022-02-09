import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AntUi from './plugin/antDesgin'

import '@/assets/css/reset.less'

const app = createApp(App)

app.use(router).use(AntUi).mount('#app')
