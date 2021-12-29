import React from 'react'
import MaterialTable from 'material-table'

const InventoryTable = () => {
  return (
    <MaterialTable
      title="Inventory"
      columns={[
        { title: 'Name', field: 'itemName', width: 200 },
        { title: 'Size', field: 'itemSize', width: 200 },
        { title: 'Color', field: 'itemColor', width: 200 },
        { title: 'SKU', field: 'itemSKU', width: 200 },
        { title: 'Purchased Where', field: 'itemPurchaseWhere', width: 200 },
        { title: 'Purchase Date', field: 'itemPurchaseDate', width: 200 },
        {
          title: 'Retail Price',
          field: 'itemPurchaseRetail',
          type: 'numeric',
          width: 200,
        },
        {
          title: 'Tax (Purchase)',
          field: 'itemPurchaseTax',
          type: 'numeric',
          width: 200,
        },
        {
          title: 'Shipping (Purchase)',
          field: 'itemPurchaseShipping',
          type: 'numeric',
          width: 200,
        },
        {
          title: 'Purchase Total',
          field: 'itemPurchaseTotal',
          type: 'numeric',
          width: 200,
        },
        { title: 'Sold Where', field: 'soldWhere', width: 200 },
        { title: 'Sell Date', field: 'soldDate', width: 200 },
        { title: 'Sell Price', field: 'soldPrice', width: 200 },
        { title: 'Tax (Sell)', field: 'soldTax', width: 200 },
        { title: 'Shipping (Sell)', field: 'soldShipping', width: 200 },
        { title: 'Sell Total', field: 'soldTotal', width: 200 },
        { title: 'Notes', field: 'notes', width: 200 },
      ]}
      data={[{ itemName: 'Air Jordan 1 Mocha' }]}
      options={{
        sorting: true,
        fixedColumns: {
          left: 1,
        },
        // tableLayout: 'fixed',
      }}
    />
  )
}

export default InventoryTable
