import Faker from 'faker';
import _ from 'lodash';
import { Migration, Users } from '../models';

Faker.locale = process.env.npm_config_locale || 'id_ID';

const Seeders = Migration.then(() => {
  _.times( process.env.npm_config_seeds || 10, () => {
    return Users.create({
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      email: Faker.internet.email(),
      address: `${ Faker.address.streetAddress() }, ${ Faker.address.secondaryAddress() }, ${ Faker.address.country() }`
    }).then((user) => {
      user.createPost({
        title: `${ Faker.random.words(3) } by ${ user.firstName }`,
        content: `${ Faker.random.words(10) } by ${ user.firstName } ${ user.lastName } ${ Faker.random.words(5) }`
      });
    });
  });
});

export default Seeders;
