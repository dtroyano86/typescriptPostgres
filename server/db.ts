import { Sequelize } from 'sequelize';
import BookFactory from './models/book';
import { UserFactory } from './models/user';

export const sequelize = new Sequelize(
  'first_test',
  'postgres',
  'postgres',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

export const models = {
  User: UserFactory(sequelize),
  Book: BookFactory(sequelize),
};

models.User.hasMany(models.Book);
models.Book.belongsTo(models.User);