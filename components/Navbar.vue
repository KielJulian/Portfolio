<template>
    <nav>
      <div class="logo">Julian Kiel</div>
              <div class="nav-items">
          <a class="link" @click="navigateToSection('home')"><span>Home</span></a>
          <a class="link" @click="navigateToSection('projects')"><span>Projekte</span></a>
          <a class="link" @click="navigateToSection('contact')"><span>Kontakt</span></a>
        </div>
    </nav>
</template>
  
<style scoped>
    nav {
        padding: var(--spacing-sm) 0 var(--spacing-sm) 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
}
    
    .nav-items {
        display: flex;
        gap: var(--spacing-sm);
}


.nav-items a:nth-child(2)::before,
.nav-items a:nth-child(3)::before {
  content: "/ ";
  margin-right: var(--spacing-sm);
}

@media (max-width: 800px) {
    .nav-items {
        gap: var(--spacing-xs);
    }

    .nav-items a:nth-child(2)::before,
.nav-items a:nth-child(3)::before {
  content: "/ ";
  margin-right: var(--spacing-xs);
}

}
</style>

<script setup>
const { toggleMode } = useColorModeToggle();
const route = useRoute();
const router = useRouter();

const navigateToSection = async (section) => {
  // If we're not on the home page, navigate to home first
  if (route.path !== '/') {
    if (section === 'home') {
      // Just navigate to home
      await router.push('/');
    } else {
      // Navigate to home with hash for the section
      await router.push(`/#${section}`);
      // Wait a bit for navigation to complete, then scroll
      await new Promise(resolve => setTimeout(resolve, 100));
      scrollToSection(`#${section}`);
    }
  } else {
    // We're on the home page, so scroll to the section
    if (section === 'home') {
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToSection(`#${section}`);
    }
  }
};

const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    const yOffset = -100;
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

// Handle navigation from URL hash on page load
onMounted(() => {
  if (route.hash) {
    // Wait a bit for the page to fully load
    setTimeout(() => {
      scrollToSection(route.hash);
    }, 100);
  }
});
</script>