<script setup>
  import Marca from '../mini_componentes/Marca.vue';
</script>




<template>
  <nav class="navbar">
    <Marca />
  </nav>
</template>



<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 15px 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  width: 100%; /* Ocupa todo el ancho de la pantalla */
  position: fixed; /* Fija el navbar en la parte superior al hacer scroll */
  top: 0; /* Lo ancla a la parte superior de la ventana */
  left: 0; /* Lo ancla a la parte izquierda de la ventana */
  z-index: 1000; /* Asegura que el navbar esté siempre por encima de otros elementos */
  height: 15px; /* <--- Altura fija que deseas (puedes ajustarla) */
  display: flex; /* Para centrar verticalmente el contenido si lo necesitas */
  align-items: center; /* Centra el contenido verticalmente */
}

h1 {
  margin: 0;
  font-size: 1.5em;
}
</style>
