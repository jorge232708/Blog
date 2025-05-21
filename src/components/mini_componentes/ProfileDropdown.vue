<template>
  <div class="profile-area has-dropdown" ref="dropdownRef" @click="toggleDropdown">
    <img :src="userProfilePic" alt="Perfil" class="profile-pic">
    <div class="dropdown-wrapper" v-if="showProfileDropdown">
      <nav>
        <div class="profile-wrapper">
          <img class="profile-avatar" :src="userProfilePic" alt="User Avatar">
          <div class="profile-info">
            <h2 class="profile-name">{{ userName }}</h2>
            <p class="profile-email">{{ userEmail }}</p>
          </div>
        </div>
        <hr class="divider">
        <ul>
          <DropdownItem link="#" label="Cuenta" />
          <DropdownItem link="#" label="Configuración" />
        </ul>
        <hr class="divider">
        <div class="plan">
          <div class="plan-description">
            <h2>Plan Gratuito</h2>
            <p>1500 créditos</p>
          </div>
          <a href="#" title="Upgrade Plan" class="upgrade-btn">Mejorar</a>
        </div>
        <hr class="divider">
        <ul>
          <DropdownItem link="#" label="Cerrar Sesión" @click="handleLogout" />
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DropdownItem from '../mini_componentes/DropdownItem.vue';

const showProfileDropdown = ref(false);
const userProfilePic = '/src/assets/Gisel.png';
const userName = "Gisela Reyes";
const userEmail = "Giselar61@gmail.com";

const emit = defineEmits(['logout']);

function toggleDropdown() {
  showProfileDropdown.value = !showProfileDropdown.value;
}

function handleLogout(event) {
  event.stopPropagation();
  emit('logout');
  showProfileDropdown.value = false;
}

// Detección de clic fuera
const dropdownRef = ref(null);

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    showProfileDropdown.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
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
  border: 2px solid var(--primary);
}


.dropdown-wrapper {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 250px;
  border-radius: 8px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.dropdown-menu ul {
  padding: 0;
  margin: 0;
  width: 100%; /* Ajuste para evitar cortes en el contenido */
}

.divider {
  width: 100%;
  border: 1px solid var(--border);
}

.plan {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plan-description h2 {
  font-size: 1rem;
  margin-bottom: 5px;
}

.upgrade-btn {
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.75rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: bold;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.upgrade-btn:hover {
  border: 1px solid var(--primary);
}
</style>
