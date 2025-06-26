<template>
  <section id="contact" class="contact-section">
    <div class="contact-content">
    <p>Ich freue mich über eine Anfrage.</p>
    <p class="gradient-text">{{ email }}</p>
    </div>
  </section>
</template>

<script setup>
const email = 'hi@juliankiel.dev';
</script>

<style scoped>
.contact-section {
  height: 50vh;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;
    }

section p:nth-of-type(1) {
  color: var(--text-grey);
}

section p:nth-of-type(2) {
  border-bottom: 2px solid var(--text-grey);
  padding: 24px 0 16px 0;
  font-size: var(--font-size-5xl);
}

  
@media (max-width: 800px) {
    .contact-section {
      height: 30svh;
      margin-top: 100px;
    }
  p {
  }

  section p:nth-of-type(2) {
  padding: 18px 0 12px 0;
  font-size: var(--font-size-3xl);
}
}
   
hr {
    padding-top: 32px;
    border: none;
    border-top: 2px;
  }
</style>