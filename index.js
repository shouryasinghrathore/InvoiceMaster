const express = require('express');
const app = express();
const routes = require('./routes/routes');
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const db = require('./config/database');
db.dbConnect();

app.use(routes);




app.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`)
})



