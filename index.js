
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const db = require('./db');

const port = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', async (req, res) => {
    const users = await db.select().from('users');
    return res.json(users);
})

app.post('/users', async (req, res) => {
    const user = await db('users').insert({ name: req.body.name }).returning('*');
    return res.json(user);
});

app.listen(port, () => console.log(`Server up at http://localhost:${port}`));
