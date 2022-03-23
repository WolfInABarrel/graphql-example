const express = require('express');
const { buildSchema } = require('graphql'); 
const { graphqlHTTP } = require('express-graphql');

const app = express();


const schema = buildSchema(`
 type Query {
     description: String
     price: Float
 }
`);

const root = {
    description: 'Test shoe',
    price: 42.69 
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
}));

app.listen(8000, () => {
    console.log('Running graphQL server...')
})