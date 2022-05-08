import { App } from 'vue';
import registerEle from './ele-component';

export function registerGlobalApp(app:App) {
    app.use(registerEle)
}