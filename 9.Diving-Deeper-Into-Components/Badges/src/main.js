import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

// these are global components
app.component('base-badge', BaseBadge);

app.mount('#app');
