const route = require('express').Router();
const Invoice = require('../models/invoice')

const{invoiceGenerator,deleteInvoice,showAllInvoices}= require("../controllers/invoiceController"); 

route.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        result: "Invoice Master Home",
    })
})


route.post('/invoices',  invoiceGenerator);
route.get('/showAllinvoices',showAllInvoices);
route.delete('/delete/:id',deleteInvoice);


module.exports = route