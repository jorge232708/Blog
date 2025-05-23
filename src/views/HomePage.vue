<script setup>
  import Navbar from '../components/navbar.vue';
  import SecondaryNavbar from '../components/SecondaryNavbar.vue';
  import Main from '../components/Main.vue';

  //importamos section y sus mini componentes
  import Section from '../components/Section.vue';
  import Card from '../mini_componentes/Card.vue';

</script>

<template>
  <Navbar />
  <SecondaryNavbar /> 
  <Main />
  <Section>
    <Card
      title="Título del Mini Componente 1"
      description="Descripción del Mini Componente 1"
      imageSrc="https://via.placeholder.com/300x180"
    />
    <Card
      title="Título del Mini Componente 2"
      description="Descripción del Mini Componente 2"
      imageSrc="https://via.placeholder.com/300x180"
    />
    <Card
      title="Título del Mini Componente 3"
      description="Descripción del Mini Componente 3"
      imageSrc="https://via.placeholder.com/300x180"
    />
  </Section>
</template>
  

<style scoped>
h1 {
  color: #000000;
  font-size: 2em;
  text-align: center;
  margin-top: 100px;
}
Section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #FFFFFF;
  gap: 20px;
  padding: 10px;
}
</style>