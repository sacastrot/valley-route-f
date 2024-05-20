/**
 * In this file, configure the main application.
 *
 * This file is the entry point for the application.
 *
 * Here, we create the main Vue app and configure it with the necessary plugins.
 * Pinia is used for state management.
 * Vue Router is used for routing.
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
