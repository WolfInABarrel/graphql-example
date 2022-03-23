const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.69,
        reviews: []
    },
    
    {
        id: 'bluebean',
        description: 'It\'s a blue bean',
        price: 69.42,
        reviews: []
    }
 ]

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    })
}

function getProductByID(id) {
    return products.find((product) => {
       return products.id === id;
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment) {
    const newReview = {
        rating,
        comment
    }
    const productToAppend = products.find((product) => {
        return product.id === id;
    })
    productToAppend.reviews.push(newReview);
    return newReview;

}


 module.exports = { getAllProducts, getProductsByPrice, getProductByID, addNewProduct, addNewProductReview };