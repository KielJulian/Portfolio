<template>
    <article class="portfolio-item">
        <img :src="`/img/portfolio/${id}.jpg`" alt="Portfolio Image" class="portfolio-image">
        
        <div class="content">
            <div class="left">
                <a v-if="link" :href="link" target="_blank">
                <h3>
                    <span class="title">{{ title }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon" dominant-baseline="middle"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </h3>
                </a>
                <div class="description">
                    <slot />
                </div>
            </div>
 
            <div class="right">
                <blockquote>
                    <slot name="quote" />
                </blockquote>
                <div class="author">
                <div class="author-content">
                    <div class="image-container">
                        <img :src="`/img/portfolio/${id}-icon.png`" alt="Author Image" class="title-image" />
                    </div>
                    <div class="author-slot-container">
                <slot name="author" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </article>
 </template>
 
 <style scoped>
h3 {
    display: flex;
    align-items: baseline;
    gap: 8px;
    min-width: 0;
}

article {
    padding-bottom: 8rem;
    display: flex;
    flex-direction: column;
}
    
a:hover .icon {
  stroke: var(--white)
}

img {
    width: 100%;
}

.portfolio-image {
    border-radius: var(--border-radius-card);
    border: 0.5px solid #151515;
    box-shadow: var(--shadow-card);
}

.title {
    font-size: 24px;
    min-width: 0;
    white-space: nowrap;
}

.icon {
    width: 20px;
    height: 20px;
}

.description {
    font-size: 16px;
    padding-top: 6px;
}

    

.portfolio-item {
    opacity: 0;
    transform: perspective(1200px) translateY(40px);
    transition: all 0.5s ease;

}
.in-view {
  opacity: 1;
  transform: perspective(1200px) translateY(0px);
}


.content {
    display: flex;
    gap: 6rem;
    padding: 2rem 0 8rem 0;
    border-bottom: 2px solid var(--line);
    flex-direction: row;
 }

 
blockquote {
    color: var(--blockquote);
    font-style: italic;
}

.author {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.author-content {
    padding-top: 6px;
    text-transform: uppercase;
}

.author-slot-container :last-child {
    color: var(--blockquote);
    font-size: 10px;
    font-weight: 600;
}

.author-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
}

.image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}   
.title-image {
    width: 24px;
}

.left, .right {
    width: 50%;
    display: flex;
    flex-direction: column;
}

@media (max-width: 800px) {
    article {
        padding-bottom: 4rem;
    }
    .left {
        width: 100%;
    }

    .right {
        width: 30rem;
        margin:auto;
    }

    .description {
        padding-top: 4px;
        font-size: 14px;
    }

    .content {
        flex-direction: column;
        gap: 4rem;
        padding-bottom: 4rem;
    }

    .title {
        font-size: 18px;
    }

    .icon   {
        width: 14px;
        height: 14px;
    }

    .author-content {
        justify-content: center;
        padding-top: 1rem;
    }

    blockquote {
        text-align: center;
        font-size: 14px;
        line-height: 1.4;
    }
}
    </style>
 
 <script setup>
 defineProps({
     title: String,
     id: String,
     link: String,
    })
    
    import { onMounted, onBeforeUnmount } from 'vue';
    
    const elements = ref([]);
    
    const updateEffectOnScroll = () => {
        elements.value.forEach(element => {
            const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    
    // Schwellenwert ändern, damit das Element früher sichtbar wird
    const scrollProgress = Math.min(1, Math.max(0, (windowHeight - elementTop) / windowHeight * 4)); // 4 multiplizieren für früheren Effekt

    // Berechne eine sanftere Bewegung mit einer Ease-Funktion
    const easedProgress = Math.sqrt(scrollProgress, 1); // Quadratische Funktion für eine sanftere Bewegung

    // Wende den gleichmäßigeren Effekt an
    element.style.opacity = easedProgress;
    element.style.transform = `perspective(1200px) translateY(${40 - (40 * easedProgress)}px)`;
  });
};

onMounted(() => {
  elements.value = document.querySelectorAll('.portfolio-item');
  window.addEventListener('scroll', updateEffectOnScroll);
  updateEffectOnScroll(); // Initiale Berechnung bei Seitenladen
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateEffectOnScroll);
});
 </script>