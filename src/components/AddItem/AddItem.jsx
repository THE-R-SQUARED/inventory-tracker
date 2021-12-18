import React, { useState } from 'react'
import { Form, Checkbox, Label, Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import InventoryModal from '../InventoryModal'
import {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
  ABSOLUTE,
} from '../../constants/form-styling'
import '../../styles/modal.css'
import 'react-datepicker/dist/react-datepicker.css'
import SIZES from '../../constants/item-info'

const AddItem = () => {
  const [disabled, toggleDisabledOnSoldFields] = useState(true)
  const [formFields, setFormFields] = useState({})
  const [dpPurchaseDate, setPurchaseDate] = useState('')
  const [dpSoldDate, setSoldDate] = useState('')

  const {
    soldWhere = '',
    soldDate = '',
    soldPrice = '',
    soldTax = '',
    soldShipping = '',
    soldTotal = '',
  } = formFields

  const sizeOptions = SIZES.map((size) => ({
    key: size,
    text: size,
    value: size,
  }))

  const handleChange = (e, { name, value }) => {
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
            label="Name"
            placeholder="Air Jordan 1 High Mocha"
            width={XLARGE}
          />
          <Form.Input label="Size" width={SMALL}>
            <Dropdown
              fluid
              placeholder="Size"
              search
              selection
              options={sizeOptions}
            />
          </Form.Input>
          <Form.Input label="Color" placeholder="Brown" width={MEDIUM} />
          <Form.Input label="SKU" placeholder="555088-105" width={LARGE} />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchased Where"
            placeholder="Footlocker"
            width={LARGE}
          />
          <Form.Input label="Purchase Date" fluid>
            <DatePicker
              selected={dpPurchaseDate}
              onChange={(date) => setPurchaseDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </Form.Input>
          <Form.Input
            label="Retail Price"
            placeholder="180"
            type="number"
            labelPosition="left"
            width={SMALL}
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
          <Form.Input
            label="Tax"
            placeholder="3.50"
            type="number"
            labelPosition="left"
            width={SMALL}
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
          <Form.Input
            label="Shipping"
            placeholder="10"
            type="number"
            labelPosition="left"
            width={SMALL}
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
          <Form.Input
            required
            label="Purchase Total"
            placeholder="204"
            type="number"
            labelPosition="left"
            width={SMALL}
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
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
            label="Sold Where"
            placeholder="StockX"
            width={LARGE}
            disabled={disabled}
            name="soldWhere"
            value={soldWhere}
            onChange={handleChange}
          />
          {/* <Form.Input
            label="Sell Date"
            placeholder="08/26/2022"
            width={MEDIUM}
            disabled={disabled}
            name="soldDate"
            value={soldDate}
            onChange={handleChange}
          /> */}
          <Form.Input
            label="Sell Date"
            fluid
            disabled={disabled}
            name="soldDate"
            value={soldDate}
          >
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
            disabled={disabled}
            name="soldPrice"
            value={soldPrice}
            onChange={handleChange}
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
            disabled={disabled}
            name="soldTax"
            value={soldTax}
            onChange={handleChange}
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
            disabled={disabled}
            name="soldShipping"
            value={soldShipping}
            onChange={handleChange}
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
            disabled={disabled}
            name="soldTotal"
            value={soldTotal}
            onChange={handleChange}
            labelPosition="left"
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
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
