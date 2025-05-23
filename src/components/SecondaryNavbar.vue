<template>
  <nav class="secondary-navbar">
    
    <div class="nav-section left">
      <NavLinkItem />
    </div>

    <div class="nav-section center">
      <SearchInput />
    </div>
    <div class="auth-buttons" v-if="!isLoggedIn">
      <BtnRegister />
      <BtnLogin @login="handleLoginEvent" />
    </div>
     <!-- Solo se muestra ProfileDropdown cuando el usuario ha iniciado sesión -->
    <div v-if="isLoggedIn">
      <ProfileDropdown @logout="isLoggedIn = false" />
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import NavLinkItem from '../mini_componentes/NavLinkItem.vue';
import SearchInput from '../mini_componentes/SearchInput.vue';
import BtnRegister from '../mini_componentes/BtnRegister.vue';
import BtnLogin from '../mini_componentes/BtnLogin.vue';
import ProfileDropdown from '../mini_componentes/ProfileDropdown.vue';

const isLoggedIn = ref(false);

// Maneja el evento de inicio de sesión
function handleLoginEvent() {
  isLoggedIn.value = true;
}
</script>

<style scoped>

.secondary-navbar {
  background-color: white;
  color: #007bff;
  padding: 10px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 31px;
  left: 0;
  z-index: 999;
  box-sizing: border-box;
}

.nav-section {
  display: flex;
  align-items: center;
}

.auth-button {
  background-color: transparent;
  border: 2px solid #007bff; /* Borde azul */
  color: #007bff; /* Texto azul */
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.7rem;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s ease-in-out;
}

/* Estilo al pasar el mouse */
.auth-button:hover {
  background-color: #007bff;
  color: white;
  transform: scale(1.05); /* Efecto de crecimiento ligero */
}

/* Botón de Registro */
.register-button {
  background-color: #007bff;
  color: white;
}

.register-button:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

/* Botón de Inicio de Sesión */
.login-button {
  background-color: transparent;
  border: 2px solid #007bff;
  color: #007bff;
}

.login-button:hover {
  background-color: #007bff;
  color: white;
}

</style>
