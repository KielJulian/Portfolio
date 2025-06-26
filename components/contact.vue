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
 section {
  height: 50vh;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
    }

section p:nth-of-type(1) {
  color: var(--blockquote);
}

section p:nth-of-type(2) {
  border-bottom: 2px solid var(--text-grey);
  padding: 24px 0 16px 0;
  font-size: var(--font-size-5xl);
}

.contact-section {
  align-items: center;
  display: flex;
  flex-direction: column;

}
  
  @media (max-width: 800px) {
  p {
    font-size: 14px;
  }

  section p:nth-of-type(2) {
  padding: 18px 0 12px 0;
  font-size: 20px;
}
}
   
hr {
    padding-top: 32px;
    border: none;
    border-top: 2px;
  }
</style>