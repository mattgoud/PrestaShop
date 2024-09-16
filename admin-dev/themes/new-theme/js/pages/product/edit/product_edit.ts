import {createApp} from 'vue';
import ProductEdit from './product_edit.vue';

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(ProductEdit);
  app.mount('#product-edit-vue');
});
