import {
  GraphQLSchema
} from 'graphql';
import { Db } from '../models';
import UserSchema from './UserSchema';
import PostSchema from './PostSchema';

import Query from './QuerySchema';
import Mutation from './MutationSchema';

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;
