const express = require('express');
const path = require('path');

const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const app = express();

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
})


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(8000, () => {
    console.log('Running graphQL server...')
})