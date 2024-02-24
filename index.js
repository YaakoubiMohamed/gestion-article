const express = require('express');
const bodyparser = require('body-parser');
const db = require('./src/models/index');


const app = express();
const sequelize = db.sequelize;


const PORT = 5000;

app.use(bodyparser.json());


sequelize.authenticate()
.then(() =>  { console.log("Database connected"); })
.catch((err) => { console.error('Unable to connect to the database:', err); });

// Routes
const publicationRoutes = require('./src/routes/publicationRoutes');
app.use('/api', publicationRoutes);

app.listen(PORT,()=>{
    console.log('server is running or port  '+PORT);
})