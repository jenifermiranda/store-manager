// aqui vai todas as funcoes q vao acessar o banco de dados
const connection = require('./connection');

const findAll = async () => {
    const [products] = await connection.execute('SELECT * FROM products ORDER BY id;');
    return products;
};

const findById = async (productId) => {
    const [[product]] = await connection
    .execute('SELECT * FROM products WHERE id = ?;', [productId]);
    return product;
};

module.exports = {
    findAll,
    findById,
};