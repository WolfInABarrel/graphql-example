const express = require('express');
const { buildSchema } = require('graphql'); 
const { graphqlHTTP } = require('express-graphql');

const app = express();


const schema = buildSchema(`
 type Query {
    products: [Product]
    orders: [Order]
 }

 type Product {
     id: ID!
     description: String!
     reviews: [Review]
     price: Float!
 }
 
 type Review {
    rating: Int!
    comment: String
 }
 type Order {
     date: String!
     subtotal: Float!
     items: [OrderItem]
 }

 type OrderItem {
     product: Product!
     quantity: Int!
 }

`);

const root = {
    products: [
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
 ],
    orders: [ 
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
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Running graphQL server...')
})