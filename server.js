import Express from 'express';
import GraphQLHTTP from 'express-graphql';
import { Schema } from './src/schema';

const HOST = process.env.HOSTSERVER || 'localhost';
const PATH = process.env.PATHSERVER || '/graphql';
const PORT = process.env.PORT || 8118;

const app = Express();

app.use(PATH, GraphQLHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(PORT, () => {
    console.log(`GraphQL Server runnning on http://${ HOST }:${ PORT }${ PATH }`);
});
