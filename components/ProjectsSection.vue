<template>
  <section id="projects-new" class="projects-section">
    <div class="section-header">
      <h2>Projekte</h2>
    </div>
    
    <div class="projects-container">
      <!-- Screenshot Preview Area -->
      <div class="screenshot-preview">
        <div class="screenshot-container">
          <img 
            :src="currentScreenshot" 
            :alt="`${activeProject.name} Screenshot`"
            class="screenshot-image"
            :key="currentScreenshot"
          >
        </div>
      </div>
      
      <!-- Projects List -->
      <div class="projects-list">
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
    id: '3',
    name: 'Dr. Georg Schulze-Eyßing',
    type: 'Webseite',
    image: '/img/portfolio/3.jpg',
    roles: ['Frontend Development', 'UI/UX Design', 'Responsive Design', 'Performance Optimization']
  },
  {
    id: '2',
    name: 'Laserklinik Leimbachtal',
    type: 'Webseite',
    image: '/img/portfolio/2.jpg',
    roles: ['Full-Stack Development', 'UI/UX Design', 'Content Management', 'SEO Optimization']
  },
  {
    id: '1',
    name: 'Hausarztpraxis Leimbachtal',
    type: 'Webseite',
    image: '/img/portfolio/1.jpg',
    roles: ['Frontend Development', 'CMS Integration', 'Mobile Optimization', 'Accessibility']
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
</script>

<style scoped>
.projects-section {
  padding: var(--spacing-lg) 0;
  height: 50vh;
}

.section-header {
  margin-bottom: var(--spacing-lg);
}

.section-header h2 {
  color: var(--text-grey);
  font-weight: 600;
}

.projects-container {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
}

.screenshot-preview {
  flex: 1;
  border-radius: var(--border-radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  /* Set a fixed aspect ratio to prevent layout shifts */
  aspect-ratio: 16 / 10;
  position: relative;
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
}

.screenshot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: opacity 0.3s ease;
}

.projects-list {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-item {
  border-bottom: 1px solid color-mix(in srgb, var(--text-grey) 20%, transparent);
  cursor: pointer;
  transition: all 0.2s ease, border-bottom 0.3s ease 0.1s;
  overflow: hidden;
}

.project-item.expanded {
  margin-top: var(--spacing-md);
  background: var(--rewhite);
  border-radius: var(--border-radius-card);
  border: none;
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
  /* Prevent layout shift by using transform instead of margin changes */
  position: relative;
  z-index: 1;
}


.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  transition: all 0.3s ease;
}

.project-name {
  /* font-weight: 600; */
}

.project-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project-type {
  font-size: var(--font-size-sm);
  color: var(--text-light-grey);
  text-transform: uppercase;
  letter-spacing: 1px;
  /* font-weight: 600; */
}


.expand-indicator.rotated {
  transform: rotate(180deg);
}

.project-details {
  padding: 0 var(--spacing-md) var(--spacing-md) 0;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-item.expanded .project-details {
  max-height: 300px;
  opacity: 1;
  padding-bottom: var(--spacing-md);
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

.dark-mode .role-tag {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--line);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-container {
    flex-direction: column;
    gap: 4rem;
  }
  
  .screenshot-preview {
    order: 2;
  }
  
  .projects-list {
    order: 1;
  }
}

@media (max-width: 800px) {
  .projects-section {
    padding: 4rem 0;
  }
  
  .section-header h2 {
    font-size: 32px;
  }
  
  .projects-container {
    gap: 3rem;
  }
  
  .project-header {
    padding: 1rem;
  }
  
  .project-item:hover .project-header {
    padding-left: 1.5rem;
  }
  
  .project-right {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }
  
  .project-name {
    font-size: 20px;
  }
  
  .project-type {
    font-size: 12px;
  }
  
  .project-details {
    padding: 0 1rem 1rem 1rem;
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