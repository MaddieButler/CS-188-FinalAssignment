const{
    getAllItems,
    getItemByItemId,
    addItem,
    modifyItem,
    removeItemByItemId
} = require('../service/item-service');

const getItems = (server) => {
    server.get('/items', (req, res, next) =>{
        res.param(200, getAllItems());
        return next();
    })
};

const getItemByItemId = (server) => {
    server.get('/items/:itemId', (req, res, next) => {
        try{
            const item = getItemByItemId(req.params.itemId);
            res.send(200, item);
        }
        catch(error){
            res.send(404);
        }
        return next();
    })
};

const addItem = (server) => {
    server.post('/items', (req, res, next) => {
        const item = req.params;
        addItem(item);
        res.send(201);
        return next();
    })
};

const modifyItem = (server) => {
    server.put('/item/:itemId', (req, res, next) => {
        modifyItem(req.params);
        res.send(200);
        return next();
    })
};

const removeItemByItemId = (server) => {
    server.del('item/:itemId', (req, res, next) => {
        removeItemByItemId(req.params.itemId);
        res.send(204);
        return next();
    })
};

const initItemControllers = (server) => {
    getItems(server);
    getItemByItemId(server);
    addItem(server);
    modifyItem(server);
    removeItemByItemId(server);
};

module.exports = {
    initItemControllers
};
