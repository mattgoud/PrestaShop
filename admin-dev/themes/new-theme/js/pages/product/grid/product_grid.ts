import {createApp} from 'vue';
import ProductGrid from './product_grid.vue';

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(ProductGrid);
  app.mount('#product-grid-vue');
});
