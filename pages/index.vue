<template>
  <div>
    <ButtonComponent />
    <Navbar />
    <Topcard />

    <div id="portfolio" class="portfolio-itemlist">
      <div class="portfolio-titel">
        <h3>Portfolio</h3>
        <p>Hier sind einige meiner bisherigen Webdesign-Projekte.</p>
      </div>

      <PortfolioItem title="Dr. Georg Schulze-Eyßing" id="3" link="https://dr-schulze-eyssing.eu/">
        <div class="container">
          <div class="role">Rolle:</div>
          <div>Designentwurf, Designumsetzung, Webseitenaufbau, Struktur- und Layout-Anpassungen, Performance-Optimierung</div>
        </div>

  </PortfolioItem>
  
  <PortfolioItem title="Laserklinik Leimbachtal" id="2" link="https://laserklinik-leimbachtal.de/">
    <div class="container">
      <div class="role">Rolle:</div>
      <div>Designumsetzung, Integration von Design-Elementen, Struktur- und Layout-Anpassungen, Performance-Optimierung</div>
    </div>
    <template #quote>
      Die Zusammenarbeit mit Herrn Kiel ist niederschwellig, angenehm und professionell. 
      Dringende Anfragen werden sofort umgesetzt, Aufgaben ohne zeitlichen Druck, wie vereinbart.
      Als Kunde fühle ich mich in meinen Bedürfnissen abgeholt, es finden auch keine Versuche statt, mir Dinge zu verkaufen, was mein Vertrauen in dieses Unternehmen stärkt.
    </template>
    <template #author>
      <cite>Dr. med. Elias Magnus Müller</cite>
      <p>Facharzt für Allgemeinmedizin, Co-Founder</p>
    </template>
  </PortfolioItem>
  
  <PortfolioItem title="Hausarztpraxis Leimbachtal" id="1" link="https://hausarztpraxis-leimbachtal.org/">
    <div class="container">
      <div class="role">Rolle:</div>
      <div>Designüberarbeitung, Webseitenaufbau, Struktur- und Layout-Anpassungen, Performance-Optimierung</div>
    </div>
    <template #quote>
      Meine Homepage für die Praxis setzte Herr Kiel zügig und professionell um, hier beriet mich Herr Kiel gut, welche Elemente sinnhaft sind und wo ich zu viel Information eingeplant hatte. 
      Die Patienten sind sehr zufrieden, weil sie schnell an die gewünschten Informationen kommen und mir die Homepage viele telefonische Anfragen erspart. 
      Änderungen werden zeitnah und schön umgesetzt. 
    </template>
    <template #author>
      <cite>Dr. med. Elias Magnus Müller</cite>
      <p>Facharzt für Allgemeinmedizin</p>
    </template>
  </PortfolioItem>

</div>

  <Contact />

  <Footer />
</div>
</template>

<style scoped>
h3 {
  font-size: 20px;
  padding-bottom: 8px;
}

.portfolio-titel {
  padding-bottom: 4rem;
}

.portfolio-titel p {
  color: var(--blockquote);
}


.container {
  display: flex;
}

.role {
  font-weight: bold;
  margin-right: 8px;
}

@media (max-width: 800px) {
  .portfolio-titel {
    margin-top: 4rem;
    padding-bottom: 2rem;
  }
}
</style>