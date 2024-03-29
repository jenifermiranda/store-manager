const productsDB = [
    {
        id: 1,
        name: 'Martelo de Thor',
    },
    {
        id: 2,
        name: 'Traje de encolhimento',
    },
    {
        id: 3,
        name: 'Escudo do Capitão América',
    },
];
const productById = {
        id: 1,
        name: 'Martelo de Thor',
};

const ResultSetHeader = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  };

const addProduct = {
    id: 4,
    name: 'Laço da Verdade',
};

const addProductError = {
    name: '',
};

const updateProduct = {
    name: 'Martelo do Batman',
  };

const updateProductError = {
    name: '',
};

module.exports = {
    productsDB,
    productById,
    ResultSetHeader,
    addProduct,
    addProductError,
    updateProduct,
    updateProductError,
};