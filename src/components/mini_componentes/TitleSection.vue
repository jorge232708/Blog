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
  font-size: 2rem;
  color: #007bff;
  text-align: start;
  margin-bottom: 15px;
}
</style>
