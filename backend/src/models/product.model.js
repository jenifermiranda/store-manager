// aqui vai todas as funcoes q vao acessar o banco de dados
const connection = require('./connection');

const findAllProductsModel = async () => {
    const [products] = await connection.execute('SELECT * FROM products ORDER BY id;');
    return products;
};

const findByIdProductModel = async (productId) => {
    const [[product]] = await connection
    .execute('SELECT * FROM products WHERE id = ?;', [productId]);
    return product;
};

const addProductModel = async (name) => {
    const [addProduct] = await connection
    .execute('INSERT INTO products (name) VALUES (?)', [name]);
    const newProduct = {
        id: addProduct.insertId,
        name,
    };
    return newProduct;
};

module.exports = {
    findAllProductsModel,
    findByIdProductModel,
    addProductModel,
};