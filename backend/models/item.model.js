const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// for mongoose schema type double:
// https://www.npmjs.com/package/@mongoosejs/double

const itemSchema = new Schema({
    itemName: { type: String, required: true },
    itemSize: { type: String, required: false },
    itemColor: { type: String, required: false },
    itemSKU: { type: String, required: false },
    purchasedWhere: { type: String, required: false },
    purchasedDate: { type: String, required: false },
    purchasedRetail: { type: Number, required: false },
    purchasedTax: { type: Number, required: false },
    purchasedShipping: { type: Number, required: false },
    purchasedTotal: { type: Number, required: true },
    soldWhere: { type: String, required: false },
    soldDate: { type: String, required: false },
    soldPrice: { type: Number, required: false },
    soldTax: { type: Number, required: false },
    soldShipping: { type: Number, required: false },
    soldTotal: { type: Number, required: false },
    notes: { type: String, required: false },
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;