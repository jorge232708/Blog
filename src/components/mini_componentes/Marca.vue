<template>
  <router-link to="/" class="brand-link">
    <h1>GRV Academy</h1> 
  </router-link>
</template>

<script setup>
// No necesitamos lógica JS compleja para este componente tan simple.
</script>

<style scoped>
.brand-link {
  text-decoration: none; /* Quita el subrayado predeterminado de los enlaces */
  cursor: pointer; /* Indica que es clickeable */
  color: white;
}

.brand-link h1 {
  margin: 0; /* Quita el margen predeterminado del h1 */
  font-size: 1.5em; /* Ajusta el tamaño de fuente si lo deseas */
}
</style>