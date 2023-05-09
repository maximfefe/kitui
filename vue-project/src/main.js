import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TitleComponent from './components/Component/TitleComponent.vue'
import TextComponent from './components/Component/TextComponent.vue'


import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
                .component('TitleComponent', TitleComponent)
                .component('TextComponent', TextComponent)


app.use(createPinia())
app.use(router)

app.mount('#app')
