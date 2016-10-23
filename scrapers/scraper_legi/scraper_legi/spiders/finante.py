import scrapy
import requests
import json

URL = 'http://legi.vij.ro:9337/submit'

class FinanteSpider(scrapy.Spider):
    name = "finante"
    start_urls = [
        'http://www.mfinante.gov.ro/transparent.html?method=transparenta&pagina=acasa&locale=ro',
        'http://www.mfinante.ro/proiecteachizitii.html?&pagina=acasa',
    ]

    def parse(self, response): # "//tr//div" "tr div"
        for document in response.xpath('//a[@class="downlPDF"] | //a[@class="downlDOC"]'):
            data = {
                'titlu': document.xpath('./text()').extract_first() ,
                'originalUrl': document.xpath('./@href').extract_first() ,
                'minister': 'Ministerul Finantelor' ,
                'originalPage': response.url ,
                'crawler': 'finante' ,
            }
            requests.post(URL, data={'data': json.dumps(data)})
            yield data
