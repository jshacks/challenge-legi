var scraperjs = require('scraperjs');
scraperjs.StaticScraper.create('http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro')
    .scrape(function($) {
        return $("tbody td div").map(function() {
            return $(this).text();
        }).get();
    })
    .then(function(titlu) {
        var data = [];
        for (var i=0; i < titlu.length; i++){
            titlu[i] = titlu[i].replace("\r\n",'');
            titlu[i] = titlu[i].trim();
            data[i] = titlu[i].match(/\d{2}\.\d{2}\.\d{4}/g);
            //console.log(i, data[i]);
            //console.log(i + " " +titlu[i]);
        }
    })
    
    .scrape(function($) {
            return $("tbody td div a:first-child").map(function() {
                return $(this).text();
            }).get();
        })
    .then(function(categorie){
        //console.log('\n');
        //console.log(categorie);
    })

    .scrape(function($) {
            return $("table tbody tr td div a:nth-child(1)").map(function() {
                return $(this).html();
            }).get();
        })
    .then(function(urlMain){
        var linkuri = [];
        console.log('\n');
        //console.log(urlMain[0]);
        linkuri[0] = urlMain[0].match(/href="([^\'\"]+)/g);
        console.log(linkuri[0]);
    })
