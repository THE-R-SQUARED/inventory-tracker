import React from 'react'
import MaterialTable from 'material-table'

const InventoryTable = () => {
  return (
    <MaterialTable
      title="Inventory"
      columns={[
        { title: 'Name', field: 'itemName' },
        { title: 'Size', field: 'itemSize' },
        { title: 'Color', field: 'itemColor' },
        { title: 'SKU', field: 'itemSKU' },
        { title: 'Purchased Where', field: 'itemPurchaseWhere' },
        { title: 'Purchase Date', field: 'itemPurchaseDate' },
        {
          title: 'Retail Price',
          field: 'itemPurchaseRetail',
          type: 'numeric',
        },
        {
          title: 'Tax (Purchase)',
          field: 'itemPurchaseTax',
          type: 'numeric',
        },
        {
          title: 'Shipping (Purchase)',
          field: 'itemPurchaseShipping',
          type: 'numeric',
        },
        {
          title: 'Purchase Total',
          field: 'itemPurchaseTotal',
          type: 'numeric',
        },
        { title: 'Sold Where', field: 'soldWhere' },
        { title: 'Sell Date', field: 'soldDate' },
        {
          title: 'Sell Price',
          field: 'soldPrice',
          type: 'numeric',
        },
        { title: 'Tax (Sell)', field: 'soldTax', type: 'numeric' },
        {
          title: 'Shipping (Sell)',
          field: 'soldShipping',
          type: 'numeric',
        },
        {
          title: 'Sell Total',
          field: 'soldTotal',
          type: 'numeric',
        },
        { title: 'Notes', field: 'notes' },
      ]}
      data={[{ itemName: 'Air Jordan 1 Mocha' }]}
      options={{
        sorting: true,
        fixedColumns: {
          left: 1,
        },
      }}
    />
  )
}

export default InventoryTable
