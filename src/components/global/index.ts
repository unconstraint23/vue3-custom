import { App } from 'vue';
import registerEle from './ele-component';
import { registerIcon } from './ele-component';

export function registerI(app:App) {
  app.use(registerIcon)
}

export function registerGlobalApp(app:App) {
    app.use(registerEle)
}
