const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.69,
    },
    
    {
        id: 'bluebean',
        description: 'It\'s a blue bean',
        price: 69.42
    }
 ]

function getAllProducts() {
    return products;
}

 module.exports = { getAllProducts };