<template>
  <div>
    <puik-alert
      title="title"
      variant="success"
      :disable-borders="false"
      button-label="buttonLabel"
      @click="Alertclick"
    >
      This is the description of the success alert:
      <p>{{ dataProductEdit }}</p>
    </puik-alert>
  </div>
</template>

<script setup lang="ts">
  import {PuikAlert} from '@prestashopcorp/puik-components';
  import {ref} from 'vue';

  const Alertclick = (event: Event) => {
    console.log(event);
  };

  const dataProductEdit = ref((document.querySelector('#product-edit-vue') as HTMLElement)?.dataset?.productEdit);

</script>

<style lang="scss">
</style>
