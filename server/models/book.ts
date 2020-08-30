import { Sequelize, Model, DataTypes } from "sequelize";
// import { UserAttributes } from './user';


// Fields of a single Database row
export interface BookAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// A single row of data the you can fetch from the database
//  It has all the Book specific stuff and all the Model stuff
export interface BookInstance extends Model<BookAttributes>, BookAttributes {}
export class Book extends Model<BookInstance, BookAttributes> {}


// This is what is created with sequelize define
export type BookModel = typeof Model & BookInstance;

export default function (sequelize: Sequelize): BookModel {
  const book = <BookModel>sequelize.define("book", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return book;
}
