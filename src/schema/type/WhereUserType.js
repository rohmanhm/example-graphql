import {
  GraphQLInputObjectType
} from 'graphql';
import UserType from './UserType';
import _ from 'lodash';

export default new GraphQLInputObjectType({
  name: 'WhereUserType',
  description: 'Make a new Input Object Type Where for updateUser mutation',
  fields() {
    const fields = UserType.getFields();
    const requireFields = ['id', 'email'];

    return _.pick(fields, requireFields);
  }
});
