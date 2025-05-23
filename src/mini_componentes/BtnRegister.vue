<template>
  <button class="auth-button register-button">Únete de forma gratuita</button>
</template>

<style scoped>
.auth-button {
  background-color: transparent;
  border: 1px solid #5098e6;
  color: #007bff;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.auth-button:hover {
  background-color: #7d9fc4;
  color: white;
}

.register-button {
  background-color: #6e87a3;
  color: white;
}

.register-button:hover {
  background-color: #2463a7;
  border-color: #39699c;
}
</style>
