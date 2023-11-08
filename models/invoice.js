const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
    gstNumber: { type: String },
    customerName: { type: String },
    items: [{
        name: String,
        quantity: Number,
        gstRate: Number,
        Amount: Number,
    }],
    taxableAmount: { type: Number },
    totalPayableAmount: { type: Number },
});

module.exports = mongoose.model('Invoice', invoiceSchema)