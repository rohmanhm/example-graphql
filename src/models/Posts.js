import Sequelize from 'sequelize';
import Conn from '../database/conn';

const Model = Conn.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

export default Model;
