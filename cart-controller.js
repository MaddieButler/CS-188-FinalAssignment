const {
    getAllCarts,
    getCartByCartId,
    addCart,
    modifyCart,
    removeCartByCartId
} = require('../services/cart-service');

const getCarts = (server) => {
    server.get('/carts', (req, res, next) => {
    res.send(200, getAllCarts());
    return next();
    })
};

const getCartByCartId = (server) => {
    server.get('/carts/:cartId', (req, res, next) => {
        try {
            const cart = getCartByCartId(request.params.cartId);
            res.send(200, cart);
        }
        catch(error) {
            res.send(404);
        }
            return next();
    })
};

const updateCart = (server) => {
    server.put('/cart/:cartId', (req, res, next) => {
        updateCart(req.params);
        res.send(200);
        return next();
    })
};

const addCart = (server) => {
    server.post({'/cart', (req, res, next) =>
        const cart = req.params;
        addCart(cart);
        res.send(201);
        return next();
    })
};

const deleteCart = (server) => {
        server.del('/cart/:cartId', (req, res, next) => {
            removeCartByCartId(req.params.cartId);
            res.send(204);
            return next();
        })
};

const initCartControllers = (server) => {
    getCarts(server);
    getCartByCartId(server);
    addCart(server);
    updateCart(server);
    deleteCart(server);
};

module.exports = {
    initCartControllers
};