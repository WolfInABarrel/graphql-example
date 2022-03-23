const productsModel = require('./products.model');

const productsResolver = {
    Query: {
        products: () => {
            console.log('Getting the products.');
            return productsModel.getAllProducts();
        },
    }
}

module.exports = productsResolver;