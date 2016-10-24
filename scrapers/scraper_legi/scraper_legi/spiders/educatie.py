import scrapy
import requests
import json

URL = 'http://legi.vij.ro:9337/submit'

class EducatieSpider(scrapy.Spider):
    name = "educatie"
    start_urls = [
        'http://www.edu.ro/proiecte-acte-normative-0'
    ]

    def parse(self, response):
        for document in response.xpath('/html/body/div[3]/div/div/div/div[2]/div/div[1]/div/div[1]/div/article/div[1]/div/div/ul//li'):
            if document.xpath('./a'):
                varPath = './a'
            else:
                varPath = './p/a'
            data = {
                'titlu': document.xpath(varPath + '/text()').extract_first() ,
                'originalUrl': 'http://www.edu.ro' + document.xpath(varPath + '/@href').extract_first() ,
                'minister': 'Ministerul Educatiei Nationale si Cercetarii Stiintifice' ,
                'originalPage': response.url ,
                'crawler': 'educatie' ,
            }
            requests.post(URL, data={'data': json.dumps(data)})
            yield data

