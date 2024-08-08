const express = require('express');
const cors = require('cors') // This is new
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(cors())
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));
require('./routes/product.routes')(app); // This is new
require('./config/mongoose.config'); // This is new
app.listen(port, () => console.log(`Listening on port: ${port}`) );
