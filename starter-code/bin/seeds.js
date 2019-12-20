const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const myCelebs = [
  {
    name: "Linn da Quebrada",
    occupation: "singer",
    catchPhrase: "Olá meninas"
  },
  {
    name: "Grimes",
    occupation: "producer",
    catchPhrase: "Technobabble"
  },
  {
    name: "Laura Diaz",
    occupation: "composer",
    catchPhrase: "Gasolinda neles"
  }
]

Celebrity.create(myCelebs)
.then(_ => console.log('Success!'))
.catch(error => console.log(error));