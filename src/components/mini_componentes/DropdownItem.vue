<template>
  <li class="dropdown-item" v-on="$attrs">
    <router-link :to="link" class="dropdown-link">{{ label }}</router-link>
    <div class="underline"></div>
  </li>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.dropdown-link {
  text-decoration: none;
  color: #007bff;
  display: block;
  transition: color 0.4s ease;
  padding-right: 30px;
}

.dropdown-link:hover {
  color: #0056b3;
}

.underline {
  height: 1px;
  background-color: #eee;
  margin-top: 5px;
}
</style>
