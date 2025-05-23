<template>
  <button class="auth-button login-button" @click="handleLogin">Iniciar Sesión</button>
</template>

<script setup>
// Emite un evento de login para que el padre actualice el estado
const emit = defineEmits(['login']);

function handleLogin() {
  emit('login');
}
</script>

<style scoped>
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

.login-button:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
