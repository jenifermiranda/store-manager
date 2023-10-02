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

const addSaleModel = async (array) => {
    const [addSales] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');

    array.forEach(async (elem) => {
        await connection.execute(`INSERT INTO 
        sales_products 
        (sale_id, product_id, quantity) 
        VALUES (?, ?, ?)`, [addSales.insertId, elem.productId, elem.quantity]);
    });
    const addSale = {
        id: addSales.insertId,
        itemsSold: array,
    };
    return addSale;
};

const deleteSaleModel = async (saleId) => {
    await connection.execute('DELETE FROM sales WHERE id = ?', [saleId]);

    await connection.execute('DELETE FROM sales_products WHERE sale_id = ?', [saleId]);
};

const updateProductQuantityModel = async (saleId, productId, quantity) => {
    await connection.execute(`UPDATE sales_products
    SET quantity = ?
    WHERE product_id = ? AND sale_id = ?;`, [quantity, productId, saleId]);

    const [[result]] = await connection.execute(`SELECT 
    s.id AS saleId, 
    s.date, 
    sp.product_id AS productId, 
    sp.quantity FROM sales s 
    INNER JOIN sales_products sp 
    ON id = sale_id 
    WHERE sp.product_id = ?;`, [productId]);
    return result;
};

module.exports = {
    findAllSalesModel,
    findByIdSaleModel,
    addSaleModel,
    deleteSaleModel,
    updateProductQuantityModel,
};