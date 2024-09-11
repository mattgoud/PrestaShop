import {createApp} from 'vue';
import testVue from './testVue.vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log('init test vue component');
  const app = createApp(testVue);
  app.mount('#test-vue');
});
