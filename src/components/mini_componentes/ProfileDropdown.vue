<template>
  <div class="profile-area has-dropdown" ref="dropdownRef" @click.prevent="toggleDropdown">
    
    <img :src="userProfilePic" alt="Perfil" class="profile-pic">
    <ul class="dropdown-menu profile-menu" v-if="showProfileDropdown">
      <DropdownItem link="#" label="Perfil" />
      <DropdownItem link="#" label="Mis Compras" />
      <DropdownItem link="#" label="Actualizaciones" />
      <DropdownItem link="#" label="Logros" />
      <!-- Para "Cerrar Sesión", emitimos el evento y usamos stopPropagation para evitar togglear -->
      <li class="dropdown-item" @click.stop="handleLogout">
        <span class="dropdown-link">Cerrar Sesión</span>
        <div class="underline"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DropdownItem from '../mini_componentes/DropdownItem.vue';

// Estado para controlar la visibilidad del dropdown
const showProfileDropdown = ref(false);
// Referencia al contenedor para detectar clics fuera
const dropdownRef = ref(null);
// Imagen del perfil
const userProfilePic = 'http://assets/vue.svg';

// Declarar el evento para logout
const emit = defineEmits(['logout']);

function toggleDropdown() {
  showProfileDropdown.value = !showProfileDropdown.value;
}

function handleLogout(event) {
  // Prevenimos propagación para que no active toggleDropdown
  event.stopPropagation();
  emit('logout'); // Notifica al componente padre que se ha hecho logout
  showProfileDropdown.value = false;
}

// Detectar clics fuera del dropdown para cerrarlo
function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    showProfileDropdown.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.profile-area {
  position: relative;
  cursor: pointer;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #007bff;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  margin: 0;
  min-width: 180px;
  border-radius: 5px;
  z-index: 1001;
}

.dropdown-item {
  padding: 8px 20px;
  position: relative;
}

.dropdown-link {
  text-decoration: none;
  color: #007bff;
  display: block;
  transition: color 0.4s ease;
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
