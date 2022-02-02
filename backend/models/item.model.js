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
    purchasedRetail: { type: Number, min: 0, required: false },
    purchasedTax: { type: Number, min: 0, required: false },
    purchasedShipping: { type: Number, min: 0, required: false },
    purchasedTotal: { type: Number, min: 0, required: true },
    soldWhere: { type: String, trim: true, required: false },
    soldDate: { type: String, trim: true, required: false },
    soldPrice: { type: Number, min: 0, required: false },
    soldTax: { type: Number, min: 0, required: false },
    soldShipping: { type: Number, min: 0, required: false },
    soldTotal: { type: Number, min: 0, required: false },
    notes: { type: String, trim: true, required: false },
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;