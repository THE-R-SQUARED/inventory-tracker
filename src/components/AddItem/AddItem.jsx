import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import InventoryModal from '../InventoryModal'
import {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
  ABSOLUTE,
} from '../../constants/form-styling'

const AddItem = () => {
  return (
    <InventoryModal
      modalButtonText="Add Item"
      modalHeaderText="Add Item"
      modalColor="blue"
      modalIcon="plus"
      modalActionButtonText="Add to Inventory"
      modalCSS="add-item-modal-header"
    >
      <Form>
        <Form.Group>
          <Form.Input
            required
            label="Name"
            placeholder="Air Jordan 1 High Mocha"
            width={XLARGE}
          />
          <Form.Input required label="Size" placeholder="10" width={SMALL} />
          <Form.Input label="Color" placeholder="Brown" width={MEDIUM} />
          <Form.Input label="SKU" placeholder="555088-105" width={LARGE} />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchased Where"
            placeholder="Footlocker"
            width={LARGE}
          />
          <Form.Input
            label="Purchase Date"
            placeholder="08/25/2022"
            width={MEDIUM}
          />
          <Form.Input label="Retail Price" placeholder="$180" width={SMALL} />
          <Form.Input label="Tax" placeholder="$3.50" width={SMALL} />
          <Form.Input label="Shipping" placeholder="$10" width={SMALL} />
          <Form.Input
            required
            label="Purchase Total"
            placeholder="$204"
            width={SMALL}
          />
        </Form.Group>
        <br />
        <div>
          <Checkbox label="Item Already Sold?" />
        </div>
        <br />
        <Form.Group>
          <Form.Input
            required
            label="Sold Where"
            placeholder="StockX"
            width={LARGE}
            disabled
          />
          <Form.Input
            required
            label="Sell Date"
            placeholder="08/26/2022"
            width={MEDIUM}
            disabled
          />
          <Form.Input
            required
            label="Sell Price"
            placeholder="$1000"
            width={SMALL}
            disabled
          />
          <Form.Input label="Tax" placeholder="$3.50" width={SMALL} disabled />
          <Form.Input
            label="Shipping"
            placeholder="$10"
            width={SMALL}
            disabled
          />
          <Form.Input
            required
            label="Sell Total"
            placeholder="$950"
            width={SMALL}
            disabled
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Notes"
            placeholder="Sold to John Smith at Kobey's Swapmeet"
            control="textarea"
            rows="3"
            width={ABSOLUTE}
          />
        </Form.Group>
      </Form>
    </InventoryModal>
  )
}
export default AddItem
