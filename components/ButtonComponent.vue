<template>
  <button 
    @click="toggleMode" 
    class="mode-toggle" 
    :aria-label="colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <SunIcon v-if="colorMode.preference === 'dark'" />
    <MoonIcon v-else />
  </button>
</template>
  
  <script setup>
  import { useColorModeToggle } from '@/composables/useColorModeToggle';
  import SunIcon from './SunIcon.vue';
  import MoonIcon from './MoonIcon.vue';
  
  const { colorMode, toggleMode } = useColorModeToggle();
  </script>
  
  <style scoped>
  .mode-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: none;
    border: none;
    padding: 0;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
  </style>