import Users from './Users';
import Posts from './Posts';
import Conn from '../database/conn';

// Make relations
Users.hasMany(Posts);
Posts.belongsTo(Users);

const force = process.env.npm_config_force || false;

// Create table
const Migration = Conn.sync({ force: force });

module.exports = {
  Db: Conn,
  Migration: Migration,
  Users: Users,
  Posts: Posts
}
