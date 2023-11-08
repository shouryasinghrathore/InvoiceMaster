const Invoice = require('../models/invoice')

exports.deleteInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.json({
                error: "enter the value of id"
            })
        }

        const result = await Invoice.findByIdAndDelete({ _id: id });
        if (!result) {
            res.json({
                result: "invoice not found"
            })
        }
        res.status(200).json({
            success: true,
            result: "invoice delete successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.invoiceGenerator = async (req, res) => {
    try {
        const { gstNumber, customerName, items } = req.body;

        let taxableAmount = 0;
        let totalPayableAmount = 0;

        items.forEach(item => {
            const { quantity, gstRate, Amount } = item;
            const itemTaxableAmount = (Amount * quantity) * (gstRate / 100);
            taxableAmount += itemTaxableAmount;
            totalPayableAmount += (Amount * quantity) + itemTaxableAmount;

        });


        // console.log("taxableAmount->", taxableAmount)
        // console.log("totalPayableAmount->", totalPayableAmount)
        
        const invoice = new Invoice({
            gstNumber,
            customerName,
            items,
            taxableAmount: taxableAmount,
            totalPayableAmount: totalPayableAmount,
        });

        await invoice.save();

        res.status(201).json({
            success: true,
            invoice: invoice,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.showAllInvoices = async (req, res) => {

    try {
        const Result = await Invoice.find({});

        return res.json({
            success: true,
            result: Result,
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.updateInvoice = async (req, res) => {
try {
    const { id } = req.params;
    const { gstNumber, customerName, items } = req.body;

        if (!id) {
            res.json({
                error: "enter the value of id"
            })
        }
        const result = await Invoice.findByIdAndUpdate({ _id: id },{gstNumber: gstNumber, customerName: customerName,items:items},{new:true});
        if (!result) {
            res.json({
                result: "invoice not found"
            })
        }
        res.status(200).json({
            success: true,
            result: "invoice updated successfully"
        })

} catch (error) {
    console.log(error)
    return res.status(500).json({
        success: false,
        error: error.message
    })
}

}