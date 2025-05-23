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
    <Card />
  </Section>
  <h1>HomePage</h1>
</template>
  

<style scoped>
h1 {
  color: #000000;
  font-size: 2em;
  text-align: center;
  margin-top: 100px;
}
</style>