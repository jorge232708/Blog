<template>
  <main class="main-container">
    <slot>
        <ContentBlock content="Desde el año 1995, con el apoyo del grupo de teatro Tablón, 
        y hasta que llegó la pandemia, existió la Escuela de Artes Integrada GRV, que son las siglas 
        de mi nombre y- quiero aclarar- que no se llamó así porque soy ególatra, sino porque me dije:” 
        Si triunfo, en ¡Horabuena!, si no triunfo yo asumiré toda la responsabilidad“. Así funcionó hasta 
        que llegó el covid 19, que nos obligó a cerrar, pero la gente que frecuentaba la escuela, me 
        llamaba porque se había acostumbrado a hacer actividades diversas: música, danza, pintura, canto. 
        A tener eventos mensuales, entre ellos cantar bolero o karaokes, celebrar reuniones, en fin 
        teníamos un espacio para el bienestar de los participantes. Poco a poco, nos habíamos convertido 
        en un lugar para compartir, para tener amigos de verdad." />
    </slot> <!-- Aquí se insertarán los mini componentes -->
    <picture class="picture">
      <img src="../assets/Gisel.png" alt="Logo de GRV Academy" />
    </picture>
  </main>
  
</template>

<script setup>
    import ContentBlock from '../components/mini_componentes/ContentBlock.vue';
</script>

<style scoped>
.main-container {
    display: flex;
    padding: 20px 2px;
    width: 100%;
    height: 70dvh;
    margin: 0;
    background-color: rgb(233, 243, 252);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.7rem; 
}

.picture {
    width: 40%;
    height: 91%; /* Igualar altura al contenedor padre */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 73px;
    margin-left: 90px;
}

.picture img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen sin perder proporción */
}
</style>
