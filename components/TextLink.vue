<template>
  <NuxtLink 
    v-if="!scroll"
    :to="to" 
    class="link"
  >
    <span>{{ text }}</span>
    <svg
      class="button-icon"
      stroke="currentColor"
      stroke-width="2.2"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
  </NuxtLink>
  
  <a 
    v-else
    @click="scrollToSection(to)"
    class="link"
    style="cursor: pointer;"
  >
    <span>{{ text }}</span>
    <svg
      class="button-icon"
      stroke="currentColor"
      stroke-width="2.2"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
  </a>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  scroll: {
    type: Boolean,
    default: false
  }
});

const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    const yOffset = -100;
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
</script>

<style scoped>
.button-icon {
  width: 18px;
  margin-left: var(--spacing-xs);
  display: flex;
  transition: transform 0.4s ease;
  stroke: var(--link-hover);
}

.link:hover .button-icon {
  transform: translateX(3px);
  transition: transform 0.3s var(--bounce-ease);
  stroke: #3b82f6;
}
</style> 