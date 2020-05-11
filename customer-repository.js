let customers = [
    {
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        'email': 'maddie.butler@drake.edu',
        'first_name': 'Maddie',
        'last_name': 'Butler'
    }
];

const selectCustomers = () => ({
    rows: customers
});

const selectCustomerByCustomerId = (customerId) =>
    customers.find((customer) => customer['customer_id'] === customerId);

const insertCustomer = (customer) => customers.push(customer);

const updateCustomer = (updatedCustomer) => {
    const customersThatDontMatch = customers.filter((customer) =>
        customer['customer_id'] !== updatedCustomer['customer_id']
    );

    customers = [
        ...customersThatDontMatch,
        updatedCustomer
    ];
};

const deleteCustomerByCustomerId = (customerId) => {
    customers = customers.filter((customer) =>
        customer['customer_id'] !== customerId
    );
};

module.exports = {
    deleteCustomerByCustomerId,
    insertCustomer,
    selectCustomerByCustomerId,
    selectCustomers,
    updateCustomer
};