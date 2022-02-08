const router = require('express').Router();
let Item = require('../models/item.model');

// Add new item
router.route('/').post((req, res) => {
    const itemName = req.body.itemName;
    const itemSize = req.body.itemSize;
    const itemColor = req.body.itemColor;
    const itemSKU = req.body.itemSKU;
    const purchasedWhere = req.body.purchasedWhere;
    const purchasedDate = req.body.purchasedDate;
    const purchasedRetail = req.body.purchasedRetail;
    const purchasedTax = req.body.purchasedTax;
    const purchasedShipping = req.body.purchasedShipping;
    const purchasedTotal = req.body.purchasedTotal;
    const soldWhere = req.body.soldWhere;
    const soldDate = req.body.soldDate;
    const soldPrice = req.body.soldPrice;
    const soldTax = req.body.soldTax;
    const soldShipping = req.body.soldShipping;
    const soldTotal = req.body.soldTotal;
    const notes = req.body.notes;
    
    const newItem = new Item({
        itemName,
        itemSize,
        itemColor,
        itemSKU,
        purchasedWhere,
        purchasedDate ,
        purchasedRetail,
        purchasedTax,
        purchasedShipping,
        purchasedTotal,
        soldWhere,
        soldDate,
        soldPrice,
        soldTax,
        soldShipping,
        soldTotal,
        notes,
    });

    newItem.save()
        .then(() => res.json('Item added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get list of items in database collection
router.route('/').get((req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get info/details of specific item
router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update a specific item's info
router.route('/:id').put((req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(item => {
            res.send(item);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete item from database collection
router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;