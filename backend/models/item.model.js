const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: { type: String, required: true },
    itemSize: { type: String, required: false },
    itemColor: { type: String, required: false },
    itemSKU: { type: String, required: false },
    itemPurchaseWhere: { type: String, required: false },
    itemPurchaseDate: { type: String, required: false },
    itemPurchaseRetail: { type: String, required: false },
    itemPurchaseTax: { type: String, required: false },
    itemPurchaseShipping: { type: String, required: false },
    itemPurchaseTotal: { type: String, required: true },
    soldWhere: { type: String, required: false },
    soldDate: { type: String, required: false },
    soldPrice: { type: String, required: false },
    soldTax: { type: String, required: false },
    soldShipping: { type: String, required: false },
    soldTotal: { type: String, required: false },
    notes: { type: String, required: false },
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;