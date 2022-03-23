const orders = [ 
    {
        date: '2005-05-05',
        subtotal: 111.11,
        items: [ 
          {
            product: {
                id: 'redshoe',
                description: 'Somewhat old and possibly haunted shoe',
                price: 2.1
            },
            quantity: 3,
          }
        ]
    }
 ]

function getAllOrders() {
    return orders;
}

 module.exports = { getAllOrders };