const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const { sequelize } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', employeeRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch(err => {
        console.log('Error: ' + err);
    });
