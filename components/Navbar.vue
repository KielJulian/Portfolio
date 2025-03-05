<template>
    <nav>
      <div class="logo">Julian Kiel</div>
      <div class="nav-items">
        <a @click="scrollToSection('#portfolio')">Portfolio</a>
        <a @click="scrollToSection('#contact')">Kontakt</a>
        <ButtonComponent />
      </div>
    </nav>
</template>
  
<style scoped>
    nav {
        padding: 1rem 0 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
}
    
    .nav-items {
        display: flex;
        gap: 1.5rem;
}
a:hover {
  color: var(--link-hover);
}

</style>

<script setup>
const { toggleMode } = useColorModeToggle();

const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    const yOffset = -100;
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
</script>