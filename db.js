
require('dotenv').config();

const knex = require('knex');

module.exports = knex({
    client: 'postgres',
    connection: {
        host: 'db', // process.env.DB_HOST,
        user: 'postgres', // process.env.DB_USER,
        password: 'postgres', // process.env.DB_PASS,
        database: 'postgres', // process.env.DB_NAME
    },
});
