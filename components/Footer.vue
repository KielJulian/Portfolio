<template>
    <footer>
      <NuxtLink :to="toggleLink">{{ toggleText }}</NuxtLink>
    </footer>
  </template>
  
  <script setup>
  import { useRoute } from 'nuxt/app';
  
  const route = useRoute();
  const isImpressum = route.path === '/impressum';
  
  const toggleLink = isImpressum ? '/' : '/impressum';
  const toggleText = isImpressum ? 'Home' : 'Impressum';
  </script>
  
  <style scoped>
  footer {
    min-height: 8rem;
    color: var(--link);
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a:hover {
    color: var(--link-hover);
  }
  .footer-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .separator {
    width: 2px;
    background-color: currentColor;
    height: 1em;
  }
  </style>