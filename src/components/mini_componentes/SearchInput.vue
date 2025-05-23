<template>
  <div class="search-bar">
    <input type="text" placeholder="Buscar..." class="search-input">
    <button class="search-button">🔍</button>
  </div>
</template>

<style scoped>
.search-input {
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 20px;
  width: 200px;
  margin-right: 5px;
  font-size: 0.9em;
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
}
.search-button:hover {
  background-color: #0056b3;
}
</style>
