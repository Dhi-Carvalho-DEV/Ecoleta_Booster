import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log("Listagem de usuários");

  const users = [
    'Diego',
    'Robson',
    'Cleiton',
    'Daniel',
    'Diogo'
  ];

  response.json(users);
});

app.listen(3333);