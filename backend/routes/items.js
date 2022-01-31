const router = require('express').Router();
let Item = require('../models/item.model');

// Get list of items in database collection
router.route('/').get((req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new item
router.route('/add').post((req, res) => {
    const itemName = req.body.itemName;
    const itemSize = req.body.itemSize;
    const itemColor = req.body.itemColor;
    const itemSKU = req.body.itemSKU;
    const purchasedWhere = req.body.purchasedWhere;
    const purchasedDate = req.body.purchasedDate;
    const purchasedRetail = Number(req.body.purchasedRetail);
    const purchasedTax = Number(req.body.purchasedTax);
    const purchasedShipping = Number(req.body.purchasedShipping);
    const purchasedTotal = Number(req.body.purchasedTotal);
    const soldWhere = req.body.soldWhere;
    const soldDate = req.body.soldDate;
    const soldPrice = Number(req.body.soldPrice);
    const soldTax = Number(req.body.soldTax);
    const soldShipping = Number(req.body.soldShipping);
    const soldTotal = Number(req.body.soldTotal);
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

// Get info/details of specific item
router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete item from database collection
router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update a specific item's info
router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.itemName = req.body.itemName;
            item.itemSize = req.body.itemSize;
            item.itemColor = req.body.itemColor;
            item.itemSKU = req.body.itemSKU;
            item.purchasedWhere = req.body.purchasedWhere;
            item.purchasedDate = req.body.purchasedDate;
            item.purchasedRetail = Number(req.body.purchasedRetail);
            item.purchasedTax = Number(req.body.purchasedTax);
            item.purchasedShipping = Number(req.body.purchasedShipping);
            item.purchasedTotal = Number(req.body.purchasedTotal);
            item.soldWhere = req.body.soldWhere;
            item.soldDate = req.body.soldDate;
            item.soldPrice = Number(req.body.soldPrice);
            item.soldTax = Number(req.body.soldTax);
            item.soldShipping = Number(req.body.soldShipping);
            item.soldTotal = Number(req.body.soldTotal);
            item.notes = req.body.notes;

            item.save()
                .then(() => res.json('Item updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;