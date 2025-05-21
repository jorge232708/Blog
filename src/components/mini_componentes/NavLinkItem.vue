<template>
  <div class="nav-section left">
    <ul class="nav-links">
      <li class="nav-item has-dropdown"
          @mouseover="showExploreDropdown = true"
          @mouseleave="showExploreDropdown = false">
        <a href="#" class="nav-link">Explorar ▼</a>
        <ul class="dropdown-menu explore-menu" v-show="showExploreDropdown">
          <DropdownItem link="/category/desarrollo-web" label="Desarrollo Web" />
          <DropdownItem link="/category/node-js" label="Node.js" />
          <DropdownItem link="/category/vue-js" label="Vue.js" />
          <DropdownItem link="/category/bases-datos" label="Bases de Datos" />
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DropdownItem from './DropdownItem.vue';

const showExploreDropdown = ref(false);
</script>

<style scoped>
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-item {
  position: relative;
  margin-right: 20px;
}

.nav-link {
  text-decoration: none;
  color: white;
  background-color: #007bff;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover {
  background-color: #0056b3;
  color: #fff;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  margin: 0;
  min-width: 180px;
  border-radius: 5px;
  display: none;
  transition: opacity 0.3s ease, transform 0.2s ease;
}

.has-dropdown:hover .dropdown-menu {
  display: block;
  opacity: 1;
  transform: translateY(5px);
}

.dropdown-item {
  padding: 8px 20px;
  position: relative;
}

.dropdown-link {
  text-decoration: none;
  color: #007bff;
  display: block;
  transition: color 0.3s ease;
}

.dropdown-link:hover {
  color: #0056b3;
  background-color: #f1f1f1;
}

.dropdown-item .underline {
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 1px;
  background-color: #eee;
}
.dropdown-item:last-child .underline {
  display: none;
}
</style>
