const salesDB = [
    {
        saleId: 1,
        date: '2023-09-29T15:49:13.000Z',
        productId: 1,
        quantity: 5,
    },
    {
        saleId: 1,
        date: '2023-09-29T15:44:57.000Z',
        productId: 2,
        quantity: 10,
    },
    {
        saleId: 2,
        date: '2023-09-29T15:44:57.000Z',
        productId: 3,
        quantity: 15,
    },
];

const saleById = {
    saleId: 2,
    date: '2023-09-29T15:44:57.000Z',
    productId: 3,
    quantity: 15,
};

const ResultSetHeaderSale = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  };

  const addSale = [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ];
  const addSaleError = [
    {
      productId: '',
      quantity: 1,
    },
  ];
const addSaleRetorno = {
    id: 4,
    itemsSold: [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ],
  };

const deleteSale1 = [
  {
    saleId: 2,
    date: '2023-10-02T14:21:39.000Z',
    productId: 3,
    quantity: 15,
  },
];

module.exports = {
    salesDB,
    saleById,
    ResultSetHeaderSale,
    addSale,
    addSaleError,
    addSaleRetorno,
    deleteSale1,
};