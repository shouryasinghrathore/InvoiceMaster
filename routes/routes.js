const route = require('express').Router();

const { invoiceGenerator, deleteInvoice, showAllInvoices, updateInvoice } = require("../controllers/invoiceController");

route.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        result: "Invoice Master Home",
    })
})


route.get('/showAllinvoices', showAllInvoices);
route.post('/invoices', invoiceGenerator);
route.delete('/delete/:id', deleteInvoice);
route.put('/updateInvoice/:id', updateInvoice);


module.exports = route