<template>
  <section class="dynamic-section">
    <slot></slot> <!-- Aquí se renderizarán los mini componentes -->
  </section>
</template>

<style scoped>
.dynamic-section {
  padding: 20px;
  border: 1px solid #ddd;
  background-color: white;
}
</style>
