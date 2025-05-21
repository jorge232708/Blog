<template>
  <nav class="secondary-navbar">
    
    <div class="nav-section left">
      <NavLinkItem />
    </div>

    <div class="nav-section center">
      <SearchInput />
    </div>

    <div class="nav-section right">
      <template v-if="!isLoggedIn">
        <AuthButtons @login="isLoggedIn = true" />
      </template>
      <template v-else>
      <ProfileDropdown @logout="isLoggedIn = false" />
    </template>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import NavLinkItem from './mini_componentes/NavLinkItem.vue';
import SearchInput from './mini_componentes/SearchInput.vue';
import AuthButtons from './mini_componentes/AuthButtons.vue';
import ProfileDropdown from './mini_componentes/ProfileDropdown.vue';

const isLoggedIn = ref(false);
</script>

<style scoped>
.secondary-navbar {
  background-color: white;
  color: #007bff;
  padding: 10px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
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
</style>
