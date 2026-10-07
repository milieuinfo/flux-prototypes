# flux-prototypes

Prototypes van toepassingen, gebouwd met [Flux](https://flux.omgeving.vlaanderen.be/), op GitHub Pages:
https://flux-prototypes.omgeving.vlaanderen.be/

Elk prototype draait zonder backend, met fictieve gegevens, en toont op elke pagina dat het een prototype is. Deze repo
bevat enkel de gebouwde prototypes; hun broncode staat in een eigen repo.

| Prototype | Pad | Broncode |
|---|---|---|
| VIZIER: de opvolging van gewestelijke planprocedures | [/vizier/](https://flux-prototypes.omgeving.vlaanderen.be/vizier/) | `milieuinfo/flux-proto-vizier` (privé) |

## Opbouw

- `index.html`: het overzicht van de prototypes.
- `404.html`: Pages geeft deze pagina voor elk pad zonder bestand, bv. `/vizier/overzicht`. Ze laadt de `index.html`
  van het prototype in de eerste map van het pad, met het pad ongewijzigd, zodat de router van het prototype het opneemt.
- `<prototype>/`: één map per prototype, met zijn gebouwde site. Een prototype gebruikt absolute paden onder zijn map,
  bv. `/vizier/index.<hash>.js`.
- `CNAME`: het domein `flux-prototypes.omgeving.vlaanderen.be`, een CNAME naar `milieuinfo.github.io`.
- `.nojekyll`: Pages serveert de bestanden zoals ze zijn.

## Een prototype publiceren

De repo van het prototype publiceert zelf, met een workflow die enkel zijn eigen map vervangt op de branch `main`, en
pusht met een deploy key met schrijfrechten op deze repo. Een deploy key hoort bij één repo: elk prototype krijgt de
zijne. VIZIER doet het met de workflow *Prototype publiceren* in `milieuinfo/flux-proto-vizier`.

Een nieuw prototype:

1. Bouw het als statische site onder het basispad `/<prototype>/`, met een `index.html`.
2. Maak een deploy key met schrijfrechten op deze repo, en zet de private sleutel als secret in de repo van het
   prototype.
3. Publiceer in de map `<prototype>/`, en voeg het prototype toe aan `index.html` en aan de tabel hierboven.
