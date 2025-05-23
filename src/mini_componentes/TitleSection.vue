<template>
  <h2 class="title">{{ text }}</h2>
</template>

<script setup>
defineProps({
  text: String
});
</script>

<style scoped>
.title {
  padding-left: 10rem;
  font-size: 2rem;
  color: #007bff;
  text-align: start;
}
</style>
