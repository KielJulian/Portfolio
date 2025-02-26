<template>
    <section id="contact">
      <p>Ich freue mich über eine Anfrage.</p>
      <p>
        <a :href="'mailto:' + email">{{ email }}</a>
      </p>
    </section>
  </template>
  
  <script setup>
  const email = 'julian.kiel@gmail.com';
  </script>

  <style scoped>
 section {
     display: flex;
     flex-direction: column;
     align-items: center;
    }

section p:nth-of-type(1) {
  color: var(--blockquote);
}

section p:nth-of-type(2) {
  border-bottom: 2px solid var(--white); 
  padding: 32px 0 24px 0;
}

a {
    font-size: 32px;
  }
  
  @media (max-width: 800px) {
    a {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }

  section p:nth-of-type(2) {
  padding: 18px 0 12px 0;
}
}
   
hr {
    padding-top: 32px;
    border: none;
    border-top: 2px;
  }
</style>