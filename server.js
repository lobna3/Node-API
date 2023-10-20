const express = require('express')
const mongoose = require('mongoose')

const  dotenv  =  require ( "dotenv" ) ;
dotenv . config ( ) ;

var cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors()) // Use this after the variable declaration

/* routage */
require("./routers/routerProduct")(app);
require("./routers/routerClient")(app);
require('./routers/routerCommande')(app);

mongoose.
connect('mongodb+srv://admin:admin@nodeapi2023.ging3ho.mongodb.net/node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('base de donnér connectée to MongoDB avec succées!')})
    .catch((error) => {
        console.log(error)
    })

app.listen(5000, ()=> {
    console.log(`Node API app serveur en tres bien marchée !`)
});

