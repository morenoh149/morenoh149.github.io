---
layout: post
title: Heroku Ghost.js example configuration
---

We're evaluating [Ghost.js](ghost.io) for our upcoming project at [r3dm.com](r3dm.com).
It's pretty cool. Explicitly NOT a CMS for node. We'll be using it on a new project for a non-profit.

Here's our config file. Hopefully it saves some new devs some trouble. [1](http://www.howtoinstallghost.com/how-to-install-ghost-on-heroku/) [2](http://shuvankar.com/install-ghost-heroku/) [3](http://ryanbrink.com/ghost-plus-heroku/) [4](http://www.allaboutghost.com/example-config-js-heroku-postgres-database/)

The cool things to note are:

1) since heroku provides an environment variable `DATABASE_URL` you can specify your
production database by passing it in. 

2) heroku doesn't support storing files. But you're probably better off storing those in Amazon S3 + cdn anyway. This way just store the resulting urls in your heroku database.

This is a much cleaner solution, imho, than those provided elsewhere.

{% highlight javascript %}
// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
      url: 'http://localhost:9000',
      database: {
        client: 'pg',
        connection: {
          host: '127.0.0.1',
          user: 'user',
          password: '',
          database: 'database',
          charset: 'utf8'
        },
        debug: true
      },
      server: {
        host: '127.0.0.1',
        port: '9000'
      },
      paths: {
        contentPath: path.join(__dirname, '/content/')
      }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    production: {
      url: 'http://ourapp.herokuapp.com',
      mail: {},
      database: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        debug: false,
        filestorage: false
      },
      server: {
        host: '0.0.0.0',
        port: process.env.PORT
      }
    },
    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'postgres',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

// Export config
module.exports = config;
{% endhighlight %}
