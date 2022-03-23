const express = require('express');
const path = require('path');

const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const app = express();

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema({
    typeDefs: typesArray
})


const root = {
 products: require('./products/products.model'),
 orders: require('./orders/orders.model'),
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Running graphQL server...')
})