module.exports = (req, res, next) => {
    const [{ productId }] = req.body;

    if (!productId || productId === 0) {
        return res.status(400).json({ message: '"productId" is required' });
    }

    next();
};