const mongoose = require('mongoose');
const Housing = require('./models/housing.js');
const Fund = require('./models/fund.js');
const Clothing = require('./models/clothing.js');
const User = require('./models/user.js');
const Port = 4000;
const Ip = process.env.IP;
const express = require ('express');
const app = express();
const fundController = require ('./controllers/fund.js');
const clothingController = require ('./controllers/clothing.js');
const housingController = require ('./controllers/housing.js');
const userController = require ('./controllers/user.js');

// Mongoose Database Connection
mongoose.connect('mongodb://localhost/excesshub', {
    useNewUrlParser: true
});

app.use('/funding', fundController); 
app.use('/user', userController);
app.use('/clothing', clothingController);
app.use('/housing', housingController);

app.get("/", (req, res) =>
        res.json({
        boye: "This is boye's territory"
    })
);

app.listen(Port, Ip, (req, res) => {
    console.log('excesshub is running on port '+ Port )
    }
);