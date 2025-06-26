<template>
    <div class="topcard-container">
        <div class="topcard-content">
            <h1>Hallo, ich bin Julian</h1>
            <h2>Ich baue Websites, die funktionieren – ehrlich, schnell und individuell. Mit klarem <span class="gradient-text">Design</span>, starker Technik und einem Fokus auf <span class="gradient-text">Nutzerfreundlichkeit</span>.</h2>
            <div class="topcard-links">
                <TextLink to="#contact" text="Kontakt" :scroll="true" />
                <TextLink to="#projects" text="Projekte" :scroll="true" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.topcard-container {
    height: 85vh;
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
    margin-bottom: var(--spacing-md);
}

h2 {
    font-size: var(--font-size-base);
    color: var(--text-light-grey);
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    text-align: center;
    margin-bottom: var(--spacing-sm);
}

.topcard-content {
    width: 100%;
    min-height: 600px;
    color: var(--text-grey);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
} 

.topcard-links {
    display: flex;
    gap: 16px;
}

.topcard-content > * {
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (max-width: 800px) {
    .topcard-container {
        align-items: flex-start;
        height: calc(100svh - (67px));
        max-height: 1200px;
    }
    
    .topcard-content {
        min-height: 100%;
    }
    
    p {
        font-size: 14px;
    }
}
</style>