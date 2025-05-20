<template>
  <nav class="secondary-navbar">
    <div class="nav-section left">
      <ul class="nav-links">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item has-dropdown" @mouseover="showExploreDropdown = true" @mouseleave="showExploreDropdown = false">
          <a href="#" class="nav-link">Explorar ▼</a>
          <ul class="dropdown-menu explore-menu" v-if="showExploreDropdown">
            <li class="dropdown-item">
              <router-link to="/category/desarrollo-web" class="dropdown-link">Desarrollo Web</router-link>
              <div class="underline"></div>
            </li>
            <li class="dropdown-item">
              <router-link to="/category/node-js" class="dropdown-link">Node.js</router-link>
              <div class="underline"></div>
            </li>
            <li class="dropdown-item">
              <router-link to="/category/vue-js" class="dropdown-link">Vue.js</router-link>
              <div class="underline"></div>
            </li>
            <li class="dropdown-item">
              <router-link to="/category/bases-datos" class="dropdown-link">Bases de Datos</router-link>
              <div class="underline"></div>
            </li>
            </ul>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Acerca de</router-link>
        </li>
      </ul>
    </div>

    <div class="nav-section center">
      <input type="text" placeholder="Buscar..." class="search-input">
      <button class="search-button">🔍</button>
    </div>

    <div class="nav-section right">
      <template v-if="!isLoggedIn">
        <button class="auth-button register-button">Registro</button>
        <button class="auth-button login-button" @click="isLoggedIn = true">Iniciar Sesión</button>
      </template>
      <template v-else>
        <div class="profile-area has-dropdown" @mouseover="showProfileDropdown = true" @mouseleave="showProfileDropdown = false">
          <img :src="userProfilePic" alt="Perfil" class="profile-pic">
          <ul class="dropdown-menu profile-menu" v-if="showProfileDropdown">
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">Perfil</a>
              <div class="underline"></div>
            </li>
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">Mis Compras</a>
              <div class="underline"></div>
            </li>
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">Actualizaciones</a>
              <div class="underline"></div>
            </li>
            <li class="dropdown-item">
              <a href="#" class="dropdown-link">Logros</a>
              <div class="underline"></div>
            </li>
            <li class="dropdown-item">
              <a href="#" class="dropdown-link" @click="isLoggedIn = false">Cerrar Sesión</a>
              <div class="underline"></div>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const showExploreDropdown = ref(false);
const showProfileDropdown = ref(false);

const userProfilePic = 'http://assets/vue.svg';

</script>

<style scoped>
.secondary-navbar {
  background-color: white;
  color: #007bff;
  padding: 10px 20px; /* Mantén el padding general, pero ajustaremos los internos */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 999;
  box-sizing: border-box; /* Asegura que el padding no añada al ancho total */
}

/* --- AJUSTES EN LAS SECCIONES Y EL PERFIL --- */

.nav-section {
  display: flex;
  align-items: center;
  /* Elimina cualquier margin-left o padding-left excesivo si lo tenías antes */
}

/* Para que la sección derecha empiece más pegada al borde,
   podemos ajustar el margen del primer elemento dentro de ella
   o asegurar que no haya un espacio excesivo. */
.nav-section.right {
  /* No necesitamos un margen-left aquí si ya el padding del navbar lo controla */
  /* Si los botones tienen un margen-left, también lo podemos ajustar */
  margin-right: 0; /* Asegura que no haya margen extra a la derecha */
}

.auth-button {
  /* ... (estilos existentes) ... */
  margin-left: 30px; /* Mantén este margen entre botones */
}

.profile-area {
  position: relative;
  cursor: pointer;
  /* Asegura que no haya padding o margen extra a la derecha de la imagen */
  margin-right: 0; /* Elimina cualquier margen derecho no deseado */
  padding-right: 0; /* Elimina cualquier padding derecho no deseado */
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #007bff;
  /* Asegura que no tenga margen derecho si es el último elemento */
  margin-right: 0;
}

/* Resto de tus estilos... */

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
  color: #007bff;
  font-weight: bold;
  padding: 5px 0;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #0056b3;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  margin: 0;
  min-width: 180px;
  z-index: 1001;
  border-radius: 5px;
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

.search-input {
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 20px;
  width: 200px;
  margin-right: 5px;
  font-size: 0.9em;
  outline: none;
}
.search-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.search-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.search-button:hover {
  background-color: #0056b3;
}

.auth-button {
  background-color: transparent;
  border: 1px solid #007bff;
  color: #007bff;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.auth-button:hover {
  background-color: #007bff;
  color: white;
}
.register-button {
  background-color: #007bff;
  color: white;
}
.register-button:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>