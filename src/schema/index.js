import {
  GraphQLSchema
} from 'graphql';

import { Db } from '../models';
import UserSchema from './UserSchema';
import PostSchema from './PostSchema';

import Query from './QuerySchema';
import Mutation from './MutationSchema';

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = {
  Schema: Schema,
  UserSchema: UserSchema,
  PostSchema: PostSchema,
  QuerySchema: Query,
  MutationSchema: Mutation
};
