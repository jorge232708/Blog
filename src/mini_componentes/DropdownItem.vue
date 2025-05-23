<!--DropdownItem.vue-->
<template>
  <li class="dropdown-item" v-on="$attrs">
    <router-link :to="link" class="dropdown-link">
      <slot>
        {{ label }}
      </slot>
    </router-link>
    <div class="underline"></div>
  </li>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.dropdown-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}

.dropdown-item:hover {
  background: var(--primary-light);
}

.dropdown-link {
  text-decoration: none;
  color: var(--text);
  display: block;
}

.dropdown-link:hover {
  color: var(--primary);
}

.underline {
  height: 1px;
  background-color: var(--border);
  margin-top: 5px;
}
</style>
