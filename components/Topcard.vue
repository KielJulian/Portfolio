<template>
    <div class="topcard-container">
        <div class="topcard-content">
            <h2>Julian Kiel</h2>
            <hr>
            <p>Moderne Optik, intuitive Bedienung - <br>für eine Website, die einfach funktioniert.</p>
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

h2 {
    font-size: 24px;
    padding-bottom: 12px;
}

.topcard-content {
    width: 100%;
    min-height: 600px;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url("/img/topcard.jpg");
    background-size: cover; 
    background-position: center center;
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
    border-top: 1px solid var(--white);
}

p {
    text-align: center;
    padding-top: 8px;
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