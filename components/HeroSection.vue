<template>
    <div class="topcard-container">
        <div class="topcard-content">
            <h1>Julian Kiel</h1>
            <h2>Ich baue Websites, die funktionieren. Ehrlich, schnell und individuell. Mit klarem <span class="gradient-text">Design</span>, starker Technik und einem Fokus auf <span class="gradient-text">Nutzerfreundlichkeit</span>.</h2>
            <div class="topcard-links">
                <TextLink to="#contact" text="Kontakt" :scroll="true" />
                <TextLink to="#projects" text="Projekte" :scroll="true" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.topcard-container {
    height: 100vh;
    max-width: var(--content-width-text);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

h1 {
    margin-bottom: var(--spacing-sm);
}

h2 {
    color: var(--text-grey);
    text-transform: none;
    text-align: center;
    margin-bottom: var(--spacing-sm);
}

.topcard-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
} 

.topcard-links {
    display: flex;
    gap: var(--spacing-xl);
}

.topcard-content > * {
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (max-width: 800px) {
    h2 {
        font-size: var(--font-size-xl);
    }
    .topcard-container {
        align-items: flex-start;
        height: calc(100svh - (52px));
        max-height: 1200px;
    }
    
    .topcard-content {
        min-height: 100%;
    }

    .topcard-links {
        gap: var(--spacing-md);
    }
}
</style>