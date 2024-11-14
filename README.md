## Opdracht
In deze git repository vind je een Vue applicatie. Je kan de Vue applicatie starten door eerst de packages te installeren en vervolgens de development server op te starten:

```bash
npm install
npm run dev
```

Als je de applicatie start zie je dat er al enkele componenten aanwezig zijn. Er wordt een pagina getoond met een titel balk. Deze bevat een (niet zo mooie) navigatie.

Kijk even rond in de code en probeer te achterhalen waar de code van de titelbalk en de navigatie zich bevindt.

### Oefening 1 - Product List maken met product card en service
Wanneer we navigeren naar de Dashboard pagina via de navigatie zien we op dit moment nog niks buiten een tekst:
```text
Een lijst van producten
```

Als je wat gaat rondkijken dan kan je zien dat deze tekst eigenlijk van de `<ProductList>` component afkomstig is die in de Dashboard pagina gebruikt wordt.

Het is de bedoeling dat op deze pagina uiteindelijk een lijst van producten getoond wordt. Die lijst van producten kan je ophalen uit de `product.service.ts`. Je kan eens kijken in de `product.service.ts` hoe deze data eruit ziet en hoe deze geëxporteerd wordt.

Om de lijst van producten op de Dashboard pagina te tonen moeten we de volgende stappen volgen:
- Er bestaat een component <ProductList/> die reeds ingeladen wordt in de Dashboard pagina. We kunnen dus alle logica om de producten op te lijsten in de <ProductList /> component steken en dan gaat die in de DashboardView tevoorschijn komen.
- In de <ProductList /> component moeten we een `script` toevoegen dat de producten ophaalt uit de `product.service.ts`
- Vermits we willen dat de HTML geupdate wordt als de variabele geupdate wordt wrappen we de variabele in een `ref`.
- In de template van de <ProductList /> kan je nu een `v-for` lus toevoegen die over elk product in de lijst gaat en dat weergeeft. Om een product weer te geven kan je een andere reeds gemaakte custom component gebruiken, de <ProductCard />. Deze vind je terug in de components folder. Kijk even goed naar dit component hoe het gebruikt moet worden en gebruik het om de producten weer te geven in de <ProductList />

### Oefening 2 - Een extra pagina toevoegen
We gaan een extra pagina toevoegen, de About pagina. Om dit te doen doe je het volgende:

- Voeg een extra pagina toe in de views folder, AboutView.vue
- In deze AboutView kan je gewoon een template aanmaken met een zin of een tekst, er hoeft niet veel logica in te zitten
- Voeg in de router een route toe naar deze pagain. Omdat we willen dat je op deze pagina ook de header en navigatie hebt, kan je deze in de `children` list van de <DefaultLayout /> toevoegen. Op die manier wordt de header ook op de about pagina getoond.
- Als je nu via de navigatiebalk van de browser naar `/about` gaat zou je de about pagina moeten zien.
- Je wilt natuurlijk niet dat je altijd via de navigatiebalk naar deze pagina moet gaan dus voeg een knop toe aan de navigatie om hier naartoe te gaan. De navigatie bevindt zich in de <Header />.