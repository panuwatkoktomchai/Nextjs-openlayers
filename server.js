const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
 
const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./i18n')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler(app);
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
   
    server.use(nextI18NextMiddleware(nextI18next))

    server.get('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(PORT, err => {
      if (err) throw err;
      console.info(`> Server ready at http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });