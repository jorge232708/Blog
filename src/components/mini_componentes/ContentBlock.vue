<template>
  <div class="content">
    <TitleSection text="proyectate con GRV Academy"/>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
  import TitleSection from '../mini_componentes/TitleSection.vue';
defineProps({
  content: String
});
</script>

<style scoped>
.content {
  display: block;
  background-color: rgb(233, 243, 252);
  padding: 15px;
  border-radius: 8px;
  width: 50%;
  margin-top: 75px;
  padding-top: 20px;
}
</style>
