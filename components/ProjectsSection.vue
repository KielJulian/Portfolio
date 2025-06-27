<template>
  <section id="projects" class="projects-section">
    <BlurrFilter id="blur-and-scale" :stdDeviation="70" :saturate="3" :opacity="0.6" />
    <div class="projects-container">
      <!-- Screenshot Preview Area -->
      <div class="screenshot-preview">
        <div 
          class="screenshot-container"
          @click="openProjectUrl(activeProject.url)"
          title="Click to visit website"
        >
          <NuxtImg 
            :src="currentScreenshot" 
            :alt="`${activeProject.name} Screenshot`"
            class="screenshot-image blurred-image"
            :key="currentScreenshot"
            width="600"
            height="450"
            loading="eager"
          />
          <div class="click-overlay">
            <div class="visit-text">Seite besuchen</div>
          </div>
        </div>
      </div>
      
      <!-- Projects List -->
      <div class="projects-list">
        <div class="section-header">
          <h2>Projekte</h2>
        </div>
        
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-item"
          :class="{ 'expanded': expandedProject === project.id }"
          @mouseenter="setActiveProject(project)"
          @mouseleave="resetToDefault"
          @click="toggleProject(project.id)"
        >
          <div class="project-header">
            <div class="project-name">{{ project.name }}</div>
            <div class="project-right">
              <div class="project-type">{{ project.type }}</div>
            </div>
          </div>
          
          <!-- Mobile Screenshot Section - Separate from project details -->
          <div class="mobile-screenshot-section" v-if="expandedProject === project.id">
            <div class="mobile-screenshot-container" @click="openProjectUrl(project.url)">
              <NuxtImg 
                :src="project.image" 
                :alt="`${project.name} Screenshot`"
                class="mobile-screenshot-image"
                width="400"
                height="250"
                loading="eager"
              />
              <div class="mobile-click-overlay">
                <div class="visit-text">Seite besuchen</div>
              </div>
            </div>
          </div>
          
          <!-- Expandable Content -->
          <div class="project-details" v-if="expandedProject === project.id">
            <div class="roles-section">
              <h4>Rolle</h4>
              <div class="tags-container">
                <span 
                  v-for="role in project.roles" 
                  :key="role"
                  class="role-tag"
                >
                  {{ role }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const projects = ref([
  {
    id: '5',
    name: 'Bahai Holzkirchen',
    type: 'Nuxt.js',
    image: '/img/portfolio/bahai-holzkirchen.jpg',
    url: 'https://bahai-holzkirchen.de',
    roles: ['Frontend Development', 'UI/UX Design', 'CMS Integration', 'Responsive Design', 'Performance Optimization']
  },
  {
    id: '4',
    name: 'Vorschau Seite',
    type: 'Nuxt.js',
    image: '/img/portfolio/01prepage.jpg',
    url: 'https://01prepage.info',
    roles: ['Frontend Development', 'UI/UX Design', 'Responsive Design', 'Performance Optimization']
  },
  {
    id: '3',
    name: 'Dr. Georg Schulze-Eyßing',
    type: 'Wordpress',
    image: '/img/portfolio/schulze-eyßing.jpg',
    url: 'https://dr-schulze-eyssing.eu',
    roles: ['Frontend Development', 'UI/UX Design', 'Responsive Design', 'Performance Optimization']
  },
  {
    id: '2',
    name: 'Laserklinik Leimbachtal',
    type: 'Wordpress',
    image: '/img/portfolio/laserklinik-leimbachtal.jpg',
    url: 'https://laserklinik-leimbachtal.de',
    roles: ['Frontend Development', 'Backend Development', 'Responsive Design']
  },
  {
    id: '1',
    name: 'Hausarztpraxis Leimbachtal',
    type: 'Wordpress',
    image: '/img/portfolio/hausarztpraxis-leimbachtal.jpg',
    url: 'https://hausarztpraxis-leimbachtal.org',
    roles: ['Frontend Development', 'UI/UX Design', 'Mobile Optimization', 'Accessibility']
  }
])

const activeProject = ref(projects.value[0])
const expandedProject = ref(null)

const currentScreenshot = computed(() => {
  return activeProject.value.image
})

const setActiveProject = (project) => {
  activeProject.value = project
}

const resetToDefault = () => {
  if (expandedProject.value) {
    // If a project is expanded, reset to that project
    const expandedProjectData = projects.value.find(p => p.id === expandedProject.value)
    if (expandedProjectData) {
      activeProject.value = expandedProjectData
    }
  } else {
    // If no project is expanded, reset to the first project
    activeProject.value = projects.value[0]
  }
}

const toggleProject = (projectId) => {
  if (expandedProject.value === projectId) {
    expandedProject.value = null
    // Reset to default behavior when closing
    activeProject.value = projects.value[0]
  } else {
    expandedProject.value = projectId
    // Set the expanded project as the active one for the screenshot
    const expandedProjectData = projects.value.find(p => p.id === projectId)
    if (expandedProjectData) {
      activeProject.value = expandedProjectData
    }
  }
}

const openProjectUrl = (url) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<style scoped>
.projects-section {
  min-height: 50vh;
  margin-top: 100px;
}

.projects-container {
  display: flex;
  gap: var(--spacing-lg);
  align-items: stretch;
}

.screenshot-preview {
  flex: 1;
  position: relative;
  height: 450px;
  max-width: 600px;
}

.screenshot-preview img {
  border-radius: var(--border-radius-card);
}

.screenshot-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.click-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.screenshot-container:hover .click-overlay {
  opacity: 1;
}

.visit-text {
  background: var(--card-background);
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.screenshot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: opacity 0.3s ease;
  border: 1px solid var(--card-background);
}

.projects-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  z-index: 1;
}

.project-item {
  cursor: pointer;
  transition: all 0.2s ease, border-bottom 0.3s ease 0.1s;
  overflow: hidden;
  background: var(--card-background);
  border-radius: var(--border-radius-card);
  padding: 0 var(--spacing-md) 0;
}

.project-item:hover {
  transform: translatex(-8px);
  transition: all 0.2s ease;
}

.project-item.expanded {
  /* margin-top: var(--spacing-md); */
  /* background: var(--card-background); */
  /* border-radius: var(--border-radius-card); */
  /* padding: 0 var(--spacing-md) var(--spacing-md); */
  /* Prevent layout shift by using transform instead of margin changes */
  padding: 0 var(--spacing-md) var(--spacing-md);
  transform: translatex(-8px);
}


.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--spacing-md) 0;
  transition: all 0.3s ease;
}

.project-name {
  font-weight: 600;
}

.project-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project-type {
  font-size: var(--font-size-xs);
  color: var(--text-light-grey);
  text-transform: uppercase;
  letter-spacing: 1px;
  /* font-weight: 600; */
}


.expand-indicator.rotated {
  transform: rotate(180deg);
}

.project-details {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-item.expanded .project-details {
  max-height: 300px;
  opacity: 1;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
    padding-top: 0;
    padding-bottom: 1.5rem;
  }
}

.roles-section h4 {
  font-size: 16px;
  color: var(--text-grey);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.role-tag {
  background: var(--background);
  color: var(--text-grey);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}


/* Mobile Screenshot Section - Hidden on desktop */
.mobile-screenshot-section {
  display: none;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-container {
    flex-direction: column;
    gap: 4rem;
  }

  .screenshot-preview {
    display: none;
  }
  
  .mobile-screenshot-section {
    display: block;
    max-height: 300px;
    opacity: 1;
    margin-bottom: var(--spacing-md);
  }
  
  .mobile-screenshot-container {
    width: 100%;
    height: 250px;
    border-radius: var(--border-radius-card);
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .mobile-screenshot-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: opacity 0.3s ease;
  }
  
  .mobile-click-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
  
  .mobile-screenshot-container:hover .mobile-click-overlay {
    opacity: 1;
  }
  
  .projects-list {
    order: 1;
  }
}

@media (max-width: 800px) {
  .projects-section {
    min-height: 100svh;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  .projects-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .project-item {
    padding: 0 var(--spacing-sm) 0;
  }

  .project-item:hover {
    transform: none;
  }

  .project-item.expanded {
    padding: 0 var(--spacing-sm) var(--spacing-sm);
    transform: none;
  }
  
  .projects-list {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .tags-container {
    gap: 0.5rem;
  }
  
  .role-tag {
    font-size: 13px;
    padding: 0.4rem 0.8rem;
  }
}
</style> 