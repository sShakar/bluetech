const express = require('express');
const app = express();
const prisma = require('@prisma/client');

app.use(express.json());
app.use('/api', require('./routes'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
