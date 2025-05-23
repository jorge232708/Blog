<template>
  <div class="main-container">  
    <div class="text-content">
      <TitleSection text="GRV Plus" class="uno"/> 
      <TitleSection text="Proyectate con GRV Academy" class="dos"/>    
      <ContentBlock content="Desde el año 1995, con el apoyo del grupo de teatro Tablón, y hasta que llegó la 
      pandemia, existió la Escuela de Artes Integrada GRV..." />
      <p class="p">
        Suscríbase para adquirir las competencias necesarias para el empleo en instituciones de categoría mundial.
      </p>
    </div>
    <div class="image-wrapper">
      <PictureAccount imageSrc="@/public/Gisel.png" altText="Foto de Gisel GRV Academy" />
    </div>
  </div>  
</template>

<script setup>
import TitleSection from '../mini_componentes/TitleSection.vue';
import ContentBlock from '../mini_componentes/ContentBlock.vue';
import PictureAccount from '../mini_componentes/PictureAccount.vue';
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 2px;
  width: 100%;
  height: 60vh;
  margin: 0;
  background-color: rgb(233, 243, 252);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.7rem;
}

.text-content {
  flex: 1; 
  overflow: auto; 
}

.uno {
  margin-top: 100px;
  margin-left: 6em;
  padding: 0;
  text-align: center;
  border: solid 1px #1412a8;
  width: 30%;
  border-radius: 10px;
  background-color: rgb(198, 223, 245)
}

.dos {
  padding-top: 20px;
  margin-bottom: 20px;
  color: #000000;

}

.p {
  font-size: 1rem;
  padding: 2rem;
}

.image-wrapper {
  flex: 1; /* Hace que ocupe todo el espacio disponible */
  max-width: 80em;
  height: 100%; /* Garantiza que se expanda con el contenedor */
  display: flex; /* Para que la imagen pueda ajustarse dentro */
  align-items: center; /* Centra la imagen dentro del espacio */
  margin-top: 0.45em;
}

</style>
