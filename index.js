
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.json({ data: "Changed Test URL" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
