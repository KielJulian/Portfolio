<template>
    <div class="topcard-container">
        <div class="topcard-content">
            <h1>Julian Kiel</h1>
            <hr>
            <h2>Moderne Optik, intuitive Bedienung - <br>für eine Website, die einfach funktioniert.</h2>
        </div>
    </div>
</template>

<style scoped>
.topcard-container {
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

h1 {
    font-size: 24px;
    padding-bottom: 12px;
}

h2 {
    font-size: 16px;
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
    text-align: center;
    padding-top: 8px;
}

.topcard-content {
    width: 100%;
    min-height: 600px;
    color: var(--rewhite);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.870), rgba(0, 0, 0, 0)), url("/img/topcardc.jpg");
    filter: grayscale(100%);
    background-size: cover; 
    background-position: top center;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
} 

.topcard-content > * {
    padding-left: 1rem;
    padding-right: 1rem;
}

hr {
    width: 50%;
    border: none;
    border-top: 1px solid var(--rewhite);
}

@media (max-width: 800px) {
    .topcard-container {
        align-items: flex-start;
        height: calc(100svh - (67px));
    }
    
    .topcard-content {
        min-height: 100%;
    }
    
    p {
        font-size: 14px;
    }
}
</style>