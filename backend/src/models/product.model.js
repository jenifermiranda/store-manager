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

module.exports = {
    findAllProductsModel,
    findByIdProductModel,
};