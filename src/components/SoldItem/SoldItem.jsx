import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import InventoryModal from '../InventoryModal'
import { SMALL, MEDIUM, LARGE } from '../../constants/form-styling'

const SoldItem = () => {
  return (
    <InventoryModal
      modalButtonText="Mark Sold"
      modalHeaderText="Mark Sold"
      modalColor="green"
      modalIcon="checkmark"
      modalActionButtonText="Mark as Sold"
      modalCSS="sold-item-modal-header"
    >
      <Form>
        <Form.Group>
          <Form.Input
            required
            label="Sold Where"
            placeholder="StockX"
            width={LARGE}
          />
          <Form.Input
            required
            label="Sell Date"
            placeholder="08/26/2022"
            width={MEDIUM}
          />
          <Form.Input
            required
            label="Sell Price"
            placeholder="1000"
            type="number"
            width={SMALL}
            labelPosition="left"
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
          <Form.Input
            label="Tax"
            placeholder="3.50"
            type="number"
            width={SMALL}
            labelPosition="left"
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
          <Form.Input
            label="Shipping"
            placeholder="10"
            type="number"
            width={SMALL}
            labelPosition="left"
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
          <Form.Input
            required
            label="Sell Total"
            placeholder="950"
            type="number"
            width={SMALL}
            labelPosition="left"
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
        </Form.Group>
      </Form>
    </InventoryModal>
  )
}
export default SoldItem
