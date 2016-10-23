import scrapy

class EducatieSpider(scrapy.Spider):
    name = "educatie"
    start_urls = [
        'http://www.edu.ro/proiecte-acte-normative-0'
    ]

    def parse(self, response):
        for document in response.xpath('//ul//li//p | //li[count(a)=1]'):
            yield {
                'titlu': document.xpath('./a/text()').extract_first()
            }
