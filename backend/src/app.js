const express = require('express');
const router = require('./routers');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});
//

app.use(router.productRouter);

module.exports = app;
