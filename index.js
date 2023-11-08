const express = require('express');
const app = express();
const routes = require('./routes/routes');
const db = require('./config/database');
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
db.dbConnect();

app.use(routes);



app.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`)
})



