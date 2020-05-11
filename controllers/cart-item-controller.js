const{
    addCartItem,
    getAllCartItems,
    getCartItemsByCartItemId,
    getCartItemByCartId,
    modifyCartItem,
    removeItemByCartItemId
} = require('../service/cart-item-service.js');

const {getCartByCartId} = require('../service/cart-service');

const addCartItem = (server) => {
    server.put('/cart-items', (req, res, next) => {
        const cartItem = req.params;
        addCartItem(cartItem);
        res.send(201);
        return next();
    })
};

const getAllCartItems = (server) => {
    server.get('/cart-items', (req, res, next) => {
        res.send(200, getAllCartItems());
        return next();
    })
};

const getCartItemsByCartItemId = (server) => {
    server.get('/cart-items/:cartItemId', (req, res, next) =>
        try {
            const cartItem = getCartItemsByCartItemId(req.params.cartItemId);
            res.send(200, cartItem);
        }
        catch(error) {
            res.send(404);
        }
        return next();
    })
};

const getCartItemByCartId = (server) => {
    server.get('/cart/:cartId/cart-items', (req, res, next) => {
        try {
            const cartItem = getCartItemsByCartId(req.params.cartId);
            res.send(200, cartItem);
        }
        catch(error) {
            res.send(404);
        }
        return next();
    })
};


const modifyCartItem = (server) => {
    server.put('/cart-items/:cartItemId', (req, res, next) => {
        modifyCartItem(req.params);
        res.send(200);
        return next();
    })
};

const removeItemByCartItemId = (server) => {
    server.del('/cart-items/:cartItemId', (req, res, next) => {
        removeItemByCartItemId(req.params.cartItemId);
        res.send(204);
        return next();
    })
};

const initCartItemControllers = (server) => {
    addCartItem(server);
    getAllCartItems(server);
    getCartItemsByCartItemId(server);
    getCartItemsByCartId(server);
    modifyCartItem(server);
    removeItemByCartItemId(server);
};

module.exports = {
    initCartItemControllers
};
