const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// for mongoose schema type double:
// https://www.npmjs.com/package/@mongoosejs/double

const itemSchema = new Schema({
    itemName: { type: String, trim: true, required: true },
    itemSize: { type: String, trim: true, required: false },
    itemColor: { type: String, trim: true, required: false },
    itemSKU: { type: String, trim: true, required: false },
    purchasedWhere: { type: String, trim: true, required: false },
    purchasedDate: { type: String, required: false },
    purchasedRetail: { type: Number, trim: true, required: false },
    purchasedTax: { type: Number, trim: true, required: false },
    purchasedShipping: { type: Number, trim: true, required: false },
    purchasedTotal: { type: Number, trim: true, required: true },
    soldWhere: { type: String, trim: true, required: false },
    soldDate: { type: String, trim: true, required: false },
    soldPrice: { type: Number, trim: true, required: false },
    soldTax: { type: Number, trim: true, required: false },
    soldShipping: { type: Number, trim: true, required: false },
    soldTotal: { type: Number, trim: true, required: false },
    notes: { type: String, trim: true, required: false },
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;