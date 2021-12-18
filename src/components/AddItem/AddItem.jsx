import React, { useState } from 'react'

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
  const [disabled, toggleDisabledOnSoldFields] = useState(true)

  const [formFields, setFormFields] = useState({})

  const {
    soldWhere = '',
    soldDate = '',
    soldPrice = '',
    soldTax = '',
    soldShipping = '',
    soldTotal = '',
  } = formFields

  // // name, value
  const handleChange = (e, { name, value }) => {
    // console.log({ name, value })
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: value,
    }))
  }

  // console.log(soldWhere)
  // useEffect(() => {
  //   setFormFields((prevFormFields) => ({
  //     ...prevFormFields,
  //     soldDate: soldWhere,
  //   }))
  // }, [soldWhere])

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
            label="vendor"
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
          <Checkbox
            label="Item Already Sold?"
            onChange={() => {
              setFormFields({})
              toggleDisabledOnSoldFields(!disabled)
            }}
          />
        </div>
        <br />
        <Form.Group>
          {/* <Message header={JSON.stringify(formFields)} /> */}
          <Form.Input
            required
            label="Sold Where"
            placeholder="StockX"
            width={LARGE}
            disabled={disabled}
            name="soldWhere"
            value={soldWhere}
            onChange={handleChange}
          />
          <Form.Input
            required
            label="Sell Date"
            placeholder="08/26/2022"
            width={MEDIUM}
            disabled={disabled}
            name="soldDate"
            value={soldDate}
            onChange={handleChange}
          />
          <Form.Input
            required
            label="Sell Price"
            placeholder="$1000"
            width={SMALL}
            disabled={disabled}
            name="soldPrice"
            value={soldPrice}
            onChange={handleChange}
          />
          <Form.Input
            label="Tax"
            placeholder="$3.50"
            width={SMALL}
            disabled={disabled}
            name="soldTax"
            value={soldTax}
            onChange={handleChange}
          />
          <Form.Input
            label="Shipping"
            placeholder="$10"
            width={SMALL}
            disabled={disabled}
            name="soldShipping"
            value={soldShipping}
            onChange={handleChange}
          />
          <Form.Input
            required
            label="Sell Total"
            placeholder="$950"
            width={SMALL}
            disabled={disabled}
            name="soldTotal"
            value={soldTotal}
            onChange={handleChange}
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
