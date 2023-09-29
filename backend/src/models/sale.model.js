const connection = require('./connection');

const findAllSalesModel = async () => {
    const [sale] = await connection
    .execute(`SELECT 
    s.id AS saleId, 
    s.date, 
    sp.product_id AS productId, 
    sp.quantity FROM sales s 
    INNER JOIN sales_products sp 
    ON id = sale_id 
    ORDER BY s.id, sp.product_id;`);
    return sale;
};

const findByIdSaleModel = async (saleId) => {
    const [sale] = await connection.execute(`SELECT 
    s.date,
    sp.product_id AS productId,
    sp.quantity
    FROM sales s
    INNER JOIN sales_products sp
    ON s.id = sp.sale_id
    WHERE s.id = ?;`, [saleId]);
    return sale;
};

module.exports = {
    findAllSalesModel,
    findByIdSaleModel,
};