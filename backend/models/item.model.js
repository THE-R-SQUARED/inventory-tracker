const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// for mongoose schema type double:
// https://www.npmjs.com/package/@mongoosejs/double

const itemSchema = new Schema({
    itemName: { type: String, trim: true, required: true },
    itemSize: { type: String, trim: true, required: true },
    itemColor: { type: String, trim: true },
    itemSKU: { type: String, trim: true },
    purchasedWhere: { type: String, trim: true },
    purchasedDate: { type: String, trim: true },
    purchasedRetail: { type: Number, min: 0 },
    purchasedTax: { type: Number, min: 0 },
    purchasedShipping: { type: Number, min: 0 },
    purchasedTotal: { type: Number, min: 0, required: true },
    soldWhere: { type: String, trim: true, },
    soldDate: { type: String, trim: true },
    soldPrice: { type: Number, min: 0 },
    soldTax: { type: Number, min: 0 },
    soldShipping: { type: Number, min: 0 },
    soldTotal: { type: Number, min: 0 },
    notes: { type: String, trim: true},
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;