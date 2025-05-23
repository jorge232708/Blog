<template>
  <section class="dynamic-section">
    <slot></slot> <!-- Aquí se renderizarán los mini componentes -->
  </section>
</template>

<script setup>
  
</script>

<style scoped>
.dynamic-section {
  padding: 20px;
  border: 1px solid #ddd;
  justify-content: space-around;
}
</style>
