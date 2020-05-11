const{
    addCustomer,
    getAllCustomers,
    getCustomersByCustomerId,
    modifyCustomer,
    removeCustomerByCustomerId
} = require('../service/customer-service');

const addCustomer = (server) => {
    server.put('/customer', (req, res, next) => {
        const customer = req.params;
        addCustomer(customer);
        res.send(201);
        return next();
    })
};

const getAllCustomers = (server) => {
    server.get('/customers', (req, res, next) => {
        res.send(200, getAllCustomers());
        return next();
    })
};

const getCustomersByCustomerId = (server) => {
    server.get('/customers/:customerId', (req, res, next) => {
    try {
        const customer = getCustomersByCustomerId(req.param.customerId);
        res.send(200, customer);
    }
    catch(error) {
        res.send(404);
    }

   return next();
    })
};

const modifyCustomer = (server) => {
    server.put('/customers/:customerId', (req, res, next) => {
        modifyCustomer(req.params);
        res.send(200);
        return next();
    })
};

const removeCustomerByCustomerId = (server) => {
    server.del('/customers/:customerId', (req, res, next) => {
        removeCustomerByCustomerId(req.params.customerId);
        res.send(204);
        return next();
    })
};

const initCustomerControllers = (server) => {
    addCustomer(server);
    getAllCustomers(server);
    getCustomersByCustomerId(server);
    modifyCustomer(server);
    removeCustomerByCustomerId(server);
};

module.exports = {
    initCustomerControllers
};
