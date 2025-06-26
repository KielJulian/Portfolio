<template>
  <div>
    <HeroSection />
    <ProjectsSection />
    <Contact />
    <Footer />
    <ColorModeToggle />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      children: `
        document.addEventListener('DOMContentLoaded', () => {
          const portfolioItems = document.querySelectorAll('[data-noindex="true"]');
          portfolioItems.forEach(item => {
            const meta = document.createElement('meta');
            meta.name = 'robots';
            meta.content = 'noindex';
            item.appendChild(meta);
          });
        });
      `,
      type: 'text/javascript'
    }
  ]
});
</script>

<style scoped>

</style>