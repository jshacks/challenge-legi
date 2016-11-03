# The project moved to https://github.com/gabriel-v/protolegi

This is the repo we used during the JSHacks hackathon in Oct, 2016.
While that hackathon has ended, the project has not.

Until we decide whether to make a GitHub organization or not, [this](https://github.com/gabriel-v/protolegi) will be the place to submit feedback and contributions.

For historic purposes, the old readme is kept below.

# Pending Laws Transparency

This project makes the public data about Romanian pending laws searchable.
The original sites have no search engines and are hard to navigate.

See it live at [legi.vij.ro](http://legi.vij.ro).

# JSHacks

This project participates in the JSHacks 2016 hackathon.

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable
behavior to contact@jshacks.io.


## Documentation

Guides and the API reference are located in the
[docs](https://github.com/jshacks/boilerplate/tree/master/docs) directory.


## Quick Start

- install bower, npm, grunt, python2, python3, virtualenv, scrapy
- set up a virtualenv
- set up the backend:

        cd backend
        source ~/virtualenv/bin/activate
        ./manage.py migrate
        ./manage.py createindex
        ./manage.py runserver 9337
        
- set up the ui:

        cd Frontend
        npm install
        bower install
        grunt serve

- start crawling:
        
        scrapy crawl finante
        scrapy crawl afaceri_externe

## Community

You can ask questions and interact with the community in the following
locations:
- [`jshacks`](http://159.203.166.178) channel on Slack


## License

MIT © 2016
