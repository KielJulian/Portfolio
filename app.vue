<template>
  <Analytics />
  <div class="main">
    <NuxtPage />
  </div>
</template>

<style scoped>
.main {
  max-width: 60rem;
  margin: 0 auto;
}

.main * {
  max-width: 100%;
}
</style>

<script setup>
  import { inject } from '@vercel/analytics';

  inject();
</script>