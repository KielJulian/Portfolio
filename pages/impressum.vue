<template>
  <ButtonComponent />
    <div class="page-container">
      <section>
        <div class="imp-container">
          <h1>Impressum</h1>
          <p>Julian Kiel<br>Ohmstr. 5<br>83607 Holzkirchen</p>
          <p class="address">hi@juliankiel.dev</p>
          <p>USt-IdNr. DE52373189606</p>
        </div>
      </section>
      <Footer />
    </div>
  </template>
  
<script setup>
useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
*:nth-child(n+2) {
  color: var(--text-grey);
}
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  padding-bottom: 24px;
}
.address {
  padding-bottom: 12px;
}

@media (max-width: 800px) {
  .page-container {
    height: 100dvh;
  }
}
</style>