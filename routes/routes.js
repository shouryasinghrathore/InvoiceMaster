const route = require('express').Router();

const { invoiceGenerator, deleteInvoice, showAllInvoices, updateInvoice } = require("../controllers/invoiceController");

route.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        result: "Invoice Master Home",
    })
})


route.post('/invoices', invoiceGenerator);
route.get('/showAllinvoices', showAllInvoices);
route.delete('/delete/:id', deleteInvoice);
route.put('/updateInvoice/:id', updateInvoice);


module.exports = route