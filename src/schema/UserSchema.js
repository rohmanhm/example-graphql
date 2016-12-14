import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql';
import { fields } from './type/UserType';
import PostSchema from './PostSchema';
import _ from 'lodash';

import Resolver from './resolver/UserTypeResolver';

const Schema = new GraphQLObjectType({
  name: 'UserSchema',
  description: 'User Schema',
  fields() {
    let userType = _.merge({}, fields, Resolver);
    // get user post by using this fields
    let relationPost = {
      post: {
        type: new GraphQLList(PostSchema),
        resolve(user) {
          return user.getPosts();
        }
      }
    };

    return _.merge({}, userType, relationPost);
  }
});

export default Schema;
