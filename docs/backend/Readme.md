# Backend Documentation

The backend is implemented in Django~~, a python framework~~.

## Warehousing the scraped documents

The backend accepts POST requests from scrapers
on `/submit` with the following data:

    {
      "data": {
        "originalUrl": "www.example.com/document.pdf",
        "originalPage": "www.example.com/documents/1",
        "titlu": "Example Document",
        "text": "Additional Text",
        "children": {
          {
            "url": "www.exmaple.com/document-1-appendix.pdf",
            "title": "Document appendix 1"
          }
       }
    }

One such request must be made for each document scraped.

## Searching through the documents

The backend responds to GET requests on `/search`.
The querystring is given through the `q` parameter.

The querystring is fed to Elasticsearch and the response has
objects similar to ones that the scrapers have sent.

## Processing pipeline

When a request is made, the request object is saved as-is in
the `SubmittedData` model for permanent storage. It's hashed,
so data won't be duplicated.

The backend downloads, hashes and stores the linked document.
It runs Apache Tika on it and extracts metadata and text content.

After all the data is extracted from the document, it's indexed
in Elasticsearch for querying.

