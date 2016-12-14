import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export const fields = {
  id: { type: GraphQLID },
  title: { type: GraphQLString },
  content: { type: GraphQLString }
};

const InputType = new GraphQLInputObjectType({
  name: 'PostType',
  description: 'Post Schema Type',
  fields: () => fields
});

export default InputType;
