/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import { registerPinia } from './pinia'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  registerPinia(app)
  app
    .use(vuetify)
    .use(router)
}
