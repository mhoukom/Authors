const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const DB = 'authors_db';

// Middleware
app.use(cors(), express.json(), express.urlencoded({extended: true}));

// Database connection
require('./config/mongoose.config')(DB)

// Connect the routes
require('./routes/authors.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`));