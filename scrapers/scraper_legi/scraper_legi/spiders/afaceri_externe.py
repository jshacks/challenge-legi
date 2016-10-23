import scrapy
import requests
import json

URL = 'http://legi.vij.ro:9337/submit'

class AfaceriExterneSpider(scrapy.Spider):
    name = "afaceri_externe"
    start_urls = [
        'http://www.mai.gov.ro/index05_1.html'
    ]

    def parse(self, response):
        for document in response.xpath("//div[@class='textPreview']//p[count(*)=4]"):
            data =  {
                'titlu': document.xpath('./text()').extract_first() ,
                'originalUrl': 'http://www.mai.gov.ro/' + document.xpath('./a/@href').extract_first() ,
                'minister': 'Ministerul Afacerilor Externe',
                'originalPage': response.url,
                'crawler': 'interne' ,
            }
            requests.post(URL, data={'data': json.dumps(data)})
            yield data
