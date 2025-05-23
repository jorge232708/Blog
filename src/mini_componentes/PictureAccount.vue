<template>
  <picture class="img_account">
    <img src="/Gisel.png" :alt="altText" />
  </picture>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageSrc: {
    type: String,
    default: new URL('@/public/Gisel.png', import.meta.url).href // Resuelve la ruta correctamente
  },
  altText: {
    type: String,
    default: 'Foto de Gisel GRV Academy'
  }
});
</script>


<style scoped>
.img_account {
  display: block;
  width: 100%;
  height: 100%;
}

.img_account img {
  padding-top: 2.3em;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
