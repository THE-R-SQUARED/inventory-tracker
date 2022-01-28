import React, { useState } from 'react'
import { Form, Label } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import InventoryModal from '../InventoryModal'
import { SMALL, LARGE } from '../../constants/form-styling'
import 'react-datepicker/dist/react-datepicker.css'

const SoldItem = () => {
  const [dpSoldDate, setSoldDate] = useState('')
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
          <Form.Input label="Sold Where" placeholder="StockX" width={LARGE} />
          <Form.Input label="Sold Date" fluid>
            <DatePicker
              selected={dpSoldDate}
              onChange={(date) => setSoldDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </Form.Input>
          <Form.Input
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
