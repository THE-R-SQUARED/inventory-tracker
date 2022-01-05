import React from 'react'
import MaterialTable from 'material-table'
import ModifyItem from '../ModifyItem'
import RemoveItem from '../RemoveItem'
import SoldItem from '../SoldItem'

const InventoryTable = () => {
  return (
    <MaterialTable
      title="Inventory"
      columns={[
        {
          title: 'Name',
          field: 'itemName',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Size',
          field: 'itemSize',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Color',
          field: 'itemColor',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        { title: 'SKU', field: 'itemSKU', cellStyle: { whiteSpace: 'nowrap' } },
        {
          title: 'Purchased Where',
          field: 'itemPurchaseWhere',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Purchase Date',
          field: 'itemPurchaseDate',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Retail Price',
          field: 'itemPurchaseRetail',
          type: 'numeric',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Tax (Purchase)',
          field: 'itemPurchaseTax',
          type: 'numeric',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Shipping (Purchase)',
          field: 'itemPurchaseShipping',
          type: 'numeric',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Purchase Total',
          field: 'itemPurchaseTotal',
          type: 'numeric',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Sold Where',
          field: 'soldWhere',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Sell Date',
          field: 'soldDate',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Sell Price',
          field: 'soldPrice',
          type: 'numeric',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Tax (Sell)',
          field: 'soldTax',
          type: 'numeric',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Shipping (Sell)',
          field: 'soldShipping',
          type: 'numeric',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: 'Sell Total',
          field: 'soldTotal',
          type: 'numeric',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        { title: 'Notes', field: 'notes' },
        {
          title: '',
          field: 'actionSold',
          sorting: 'false',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: '',
          field: 'actionModify',
          sorting: 'false',
          cellStyle: { whiteSpace: 'nowrap' },
        },
        {
          title: '',
          field: 'actionRemove',
          sorting: 'false',
          cellStyle: { whiteSpace: 'nowrap' },
        },
      ]}
      data={[
        {
          itemName: 'Air Jordan 1 Mocha',
          itemSize: '10',
          itemColor: 'Brown',
          itemSKU: '555-0555',
          itemPurchaseWhere: 'Footlocker',
          itemPurchaseDate: '01/01/2022',
          itemPurchaseRetail: '$180',
          itemPurchaseTax: '$6.50',
          itemPurchaseShipping: '$10',
          itemPurchaseTotal: '$196.50',
          soldWhere: 'StockX',
          soldDate: '01/02/2022',
          soldPrice: '$350',
          soldTax: '$6.50',
          soldShipping: '$10',
          soldTotal: '$333.50',
          notes: 'First flip!',
          actionSold: <SoldItem />,
          actionModify: <ModifyItem />,
          actionRemove: <RemoveItem />,
        },
      ]}
      options={{
        sorting: true,
        fixedColumns: {
          //   left: 1,
          right: 3,
        },
        headerStyle: {
          backgroundColor: 'teal',
          color: 'white',
          whiteSpace: 'nowrap',
        },
        // tableLayout: 'auto',
        rowStyle: {
          overflowWrap: 'break-word',
        },
      }}
    />
  )
}

export default InventoryTable
