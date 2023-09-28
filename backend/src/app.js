const express = require('express');
// const { productService } = require('./services');
const router = require('./routers');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});
//

// app.get('/products', async (req, res) => {
//   const serviceResponse = await productService.findAll();
//   if (serviceResponse.status !== 'SUCCESSFUL') {
//     return res.status(400).json(serviceResponse.data);
//   }
//   return res.status(200).json(serviceResponse.data);
// });

// app.use(productRouter.productRouter);

// app.get('/products/:id', async (req, res) => {
//   const { id } = req.params;
//   const serviceResponse = await productService.findById(id);
//   if (serviceResponse.status !== 'SUCCESSFUL') {
//     return res.status(404).json(serviceResponse.data);
//   }
//     return res.status(200).json(serviceResponse.data);
// });

module.exports = app;
