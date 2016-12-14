import {
  GraphQLObjectType
} from 'graphql';
import { fields } from './type/PostType';
import UserSchema from './UserSchema';
import _ from 'lodash';

import Resolver from './resolver/PostTypeResolver';

const Schema = new GraphQLObjectType({
  name: 'PostSchema',
  description: 'Post Schema',
  fields() {
    let postType = _.merge({}, fields, Resolver);
    // get author from a post by using this fields
    let relationUser = {
      author: {
        type: UserSchema,
        resolve(post) {
          return post.getUser();
        }
      }
    };

    return _.merge({}, postType, relationUser);
  }
})

export default Schema;
