<template>
  <div class="content">
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
defineProps({
  content: String
});
</script>

<style scoped>
.content {
  font-size: x-large;
  display: flex;
  padding: 0 1rem;
  width: 90%;
  height: 100%;
}
</style>
