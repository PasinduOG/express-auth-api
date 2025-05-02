const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
server.use('/api/users', userRoutes);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});