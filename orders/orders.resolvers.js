const ordersModel = require('./orders.model');

const ordersResolver = {
    Query: {
        orders: () => {
            console.log('Getting the orders.');
            return ordersModel.getAllOrders();
    },
}
}
module.exports = ordersResolver;