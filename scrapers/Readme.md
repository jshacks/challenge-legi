Scrapers
========

The scrapers are implemented using [Scrapy](https://scrapy.org/) and should be independent.

Each scraper should make one POST submit to the backend `/submit` endpoint for each document.
The API is found on [the backend documentation](https://github.com/jshacks/challenge-legi/blob/master/docs/backend/Readme.md).

## TODO
- Ministerul Educaţiei Naţionale și Cercetării Științifice -> www.edu.ro/proiecte-acte-normative-0 (no scraper)
- Ministerul Finanţelor Publice -> www.mfinante.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro (incomplete scraper)
- Ministerul Afacerilor Interne -> http://www.mai.gov.ro/index05_1.html (incomplete scraper)

