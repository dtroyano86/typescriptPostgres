import { DataTypes, Model, Sequelize,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  BuildOptions,
 } from "sequelize";
import {Book} from './book';

// Fields of a single Database row
export interface UserAttributes {
    id?: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}
// A single row of data that you fetch from the database
//  It is an intersection of Model and the UserModel
//  So that is has all the database methods and the user info
export interface UserInstance extends Model<UserAttributes>, UserAttributes {
  getBooks: HasManyGetAssociationsMixin<Book>;
  hasBook: HasManyHasAssociationMixin<Book, number>;
  countBooks: HasManyCountAssociationsMixin;
  createBook: HasManyCreateAssociationMixin<Book>;
}
export class User extends Model<UserInstance, UserAttributes> {}

// This is what is created when using sequelize.define
// export type UserModel = typeof Model & UserInstance;

export type UserModel = typeof Model & {
    new (options?: BuildOptions): UserInstance;
};

/**
 * Function to create a users model
 * @param sequelize a sequelize connection
 * @returns a users model
 */
export function UserFactory (sequelize: Sequelize): UserModel {
    return <UserModel>sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    });
}