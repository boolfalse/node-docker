
const db = require('./db');

(async () => {
    try {
        await db('users').insert({ name: 'User 1' });
        await db('users').insert({ name: 'User 2' });
        console.log('Added dummy users.');
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
