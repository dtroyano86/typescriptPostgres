import * as express from 'express';
import * as path from 'path';
import { models, sequelize } from './db';

const { User, Book } = models;

const app = express();

// Sets the headers to allow a service worker
app.use((req, res, next) => {
  res.set('Service-Worker-Allowed');
  next();
});

const BUILD_PATH = path.join(__dirname, '/../client/build');

app.get('/', express.static(BUILD_PATH));

app.get('/books', (req, res) => {
  User.findOne({where: {name: 'danny'}, include: Book })
    .then((data) => {
      res.status(200).send(data);
    })
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  Book.findOne({where: {id}, include: User})
    .then((data) => {
      res.status(200).send(data);
    })

});


const eraseDataBaseOnSync = true;

sequelize.sync({force: eraseDataBaseOnSync}).then(() => {
  if (eraseDataBaseOnSync){
    User.create({
      name: 'danny'
    })
      .then((user) => {
        user.createBook({name: 'danns book'});
        user.createBook({name: 'Bob book'})
      })
  }
  app.listen(8080, () => console.log('running on 8080'));
});
