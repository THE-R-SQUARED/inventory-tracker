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

const AddItem = ({ onSubmit }) => {
  const [disabled, toggleDisabledOnSoldFields] = useState(true)
  const [formFields, setFormFields] = useState({
    fields: [],
    togglableFields: [],
  })
  const [dpPurchaseDate, setPurchaseDate] = useState(null)
  const [dpSoldDate, setSoldDate] = useState(null)

  const sizeOptions = SIZES.map((size) => ({
    key: size,
    text: size,
    value: size,
  }))

  // Refactored for clear state change
  const handleClear = () => {
    toggleDisabledOnSoldFields((wasDisabled) => {
      // If it was not diabled, this means that we want to go through
      // the process of disabling the toggable inputs.
      if (!wasDisabled) {
        setSoldDate(null)
        // setFormFields({})
        // setFormFields((prevFormFields) => {
        //   // Get inputs that are not disabled and set them as the new state,
        //   // effectively clearing the toggleable fields
        //   const filteredFormFields = prevFormFields.filter((field) => {
        //     return !field.isDisabled
        //   })
        //   console.log(filteredFormFields)
        //   return [...filteredFormFields]
        // })
        setFormFields(() => {
          formFields.togglableFields = []
          return formFields
        })
      }
      return !wasDisabled
    })
  }

  const handleSubmit = () => {
    console.log('calling handleSubmit in AddItems')
    JSON.stringify(formFields)
    onSubmit({ addItemFormFields: formFields })
  }

  const handleTogglableFormInput = (e, { name, value }) => {
    setFormFields((prevFormFields) => {
      const { togglableFields } = prevFormFields
      const newFields = togglableFields.filter(
        (element) => element.name !== name
      )
      return {
        ...prevFormFields,
        togglableFields: [...newFields, { name, value }],
      }
    })
  }

  const handleFormInput = (e, { name, value }) => {
    // Step 1 Find element

    setFormFields((prevFormFields) => {
      // Go through each item in the formField state and check if there is a
      // match.
      // If match, returns the matched item reference.
      // if not matched returns null.
      // const foundItem = prevFormFields.find((element) => element.name === name)
      const { fields } = prevFormFields
      // No duplicates
      const newFields = fields.filter((element) => element.name !== name)

      // If foundItem is not null, that means we have found the item
      // and able to update it
      // directly since we already have a reference to it. Therefore
      // by copying over the values
      // in 170 it is also able to copy the changed referenced object.
      // if (foundItem) {
      //   foundItem.value = value
      //   //return [...formFields]
      //   return { ...formFields, fields: [...formFields.fields] }
      // }

      // return [...formFields, { name, value, isDisabled }]
      return {
        ...prevFormFields,
        fields: [...newFields, { name, value }],
      }
    })

    console.log(formFields, formFields.length)
  }

  const addDateField = (dateType, dateValue) => {
    setFormFields((prevFormFields) => {
      const { togglableFields } = prevFormFields
      const newFields = togglableFields.filter(
        (element) => element.name !== dateType
      )
      return {
        ...prevFormFields,
        togglableFields: [...newFields, { name: dateType, dateValue }],
      }
    })
  }

  return (
    <InventoryModal
      modalButtonText="Add Item"
      modalHeaderText="Add Item"
      modalColor="blue"
      modalIcon="plus"
      modalActionButtonText="Add to Inventory"
      modalCSS="add-item-modal-header"
      onModalSubmit={handleSubmit}
    >
      <Form>
        <Form.Group>
          <Form.Input
            required
            label="Name"
            placeholder="Air Jordan 1 High Mocha"
            width={XLARGE}
            disabled={false}
            name="itemName"
            onChange={handleFormInput}
          />
          <Form.Input label="Size" width={SMALL}>
            <Dropdown
              fluid
              placeholder="Size"
              search
              selection
              options={sizeOptions}
              disabled={false}
              name="itemSize"
              onChange={handleFormInput}
            />
          </Form.Input>
          <Form.Input
            label="Color"
            placeholder="Brown"
            width={MEDIUM}
            disabled={false}
            name="itemColor"
            onChange={handleFormInput}
          />
          <Form.Input
            label="SKU"
            placeholder="555088-105"
            width={LARGE}
            disabled={false}
            name="itemSKU"
            onChange={handleFormInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Purchased Where"
            placeholder="Footlocker"
            width={LARGE}
            disabled={false}
          />
          <Form.Input label="Purchase Date" fluid disabled={false}>
            <DatePicker
              selected={dpPurchaseDate}
              onChange={(date) => {
                setPurchaseDate(date)
                addDateField('itemPurchaseDate', date)
              }}
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
            disabled={false}
            name="itemPurchaseRetail"
            onChange={handleFormInput}
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
            disabled={false}
            name="itemPurchaseTax"
            onChange={handleFormInput}
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
            disabled={false}
            name="itemPurchaseShipping"
            onChange={handleFormInput}
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
            disabled={false}
            name="itemPurchaseTotal"
            onChange={handleFormInput}
          >
            <Label basic>$</Label>
            <input />
          </Form.Input>
        </Form.Group>
        <br />
        <div>
          <Checkbox label="Item Already Sold?" onChange={handleClear} />
        </div>
        <br />
        <Form.Group>
          <Form.Input
            label="Sold Where"
            placeholder="StockX"
            width={LARGE}
            disabled={disabled}
            name="soldWhere"
            onChange={handleTogglableFormInput}
          />
          <Form.Input label="Sell Date" fluid disabled={disabled}>
            <DatePicker
              selected={dpSoldDate}
              onChange={(date) => {
                setSoldDate(date)
                addDateField('itemSoldDate', date)
              }}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              isClearable
            />
          </Form.Input>
          <Form.Input
            label="Sell Price"
            placeholder="1000"
            type="number"
            width={SMALL}
            disabled={disabled}
            name="soldPrice"
            onChange={handleTogglableFormInput}
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
            onChange={handleTogglableFormInput}
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
            onChange={handleTogglableFormInput}
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
            onChange={handleTogglableFormInput}
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
            name="notes"
          />
        </Form.Group>
      </Form>
    </InventoryModal>
  )
}
export default AddItem
