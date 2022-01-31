const router = require('express').Router();
let Item = require('..models/item.model');

router.route('/').get((req, res) => {
    Item.find()
        .then(items => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const itemName = req.body.itemName;
    const itemSize = req.body.itemSize;
    const itemColor = req.body.itemColor;
    const itemSKU = req.body.itemSKU;
    const purchasedWhere = req.body.purchasedWhere;
    const purchasedDate = Date.parse(req.body.purchasedDate);
    const purchasedRetail = Number(req.body.purchasedRetail);
    const purchasedTax = Number(req.body.purchasedTax);
    const purchasedShipping = Number(req.body.purchasedShipping);
    const purchasedTotal = Number(req.body.purchasedTotal);
    const soldWhere = req.body.soldWhere;
    const soldDate = Date.parse(req.body.soldDate);
    const soldPrice = Number(req.body.soldPrice);
    const soldTax = Number(req.body.soldTax);
    const soldShipping = Number(req.body.soldShipping);
    const soldTotal = Number(req.body.soldTotal);
    const notes = req.body.notes;
    
    const newItem = new Item({item});

    newItem.save()
        .then(() => res.json('Item added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;