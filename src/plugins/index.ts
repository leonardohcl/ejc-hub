/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import pinia from "../stores";
import router from "../router";

// Types
import type { App } from "vue";
import { registerFirebase } from "./firebase";

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia);
  registerFirebase(app);
}
