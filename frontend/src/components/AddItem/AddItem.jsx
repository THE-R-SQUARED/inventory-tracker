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

    const handleClear = () => {
        toggleDisabledOnSoldFields((wasDisabled) => {
            // If it was not diabled, this means that we want to go through
            // the process of disabling the toggable inputs.
            if (!wasDisabled) {
                setSoldDate(null)
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
        const fieldsToSubmit = {}
        for (let i = 0; i < formFields.fields.length; i += 1) {
            fieldsToSubmit[formFields.fields[i].name] =
                formFields.fields[i].value
        }
        for (let i = 0; i < formFields.togglableFields.length; i += 1) {
            fieldsToSubmit[formFields.togglableFields[i].name] =
                formFields.fields[i].value
        }
        onSubmit({ addItemFormFields: JSON.stringify(fieldsToSubmit) })
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
        setFormFields((prevFormFields) => {
            const { fields } = prevFormFields
            // No duplicates
            const newFields = fields.filter((element) => element.name !== name)

            return {
                ...prevFormFields,
                fields: [...newFields, { name, value }],
            }
        })
    }

    const addDateField = (dateType, dateValue) => {
        setFormFields((prevFormFields) => {
            if (dateType === 'purchasedDate') {
                const { fields } = prevFormFields
                const newFields = fields.filter(
                    (element) => element.name !== dateType
                )
                return {
                    ...prevFormFields,
                    fields: [
                        ...newFields,
                        { name: dateType, value: dateValue },
                    ],
                }
            }
            const { togglableFields } = prevFormFields
            const newFields = togglableFields.filter(
                (element) => element.name !== dateType
            )
            return {
                ...prevFormFields,
                togglableFields: [
                    ...newFields,
                    { name: dateType, value: dateValue },
                ],
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
                        name="itemName"
                        onChange={handleFormInput}
                    />
                    <Form.Input label="Size" width={SMALL} required>
                        <Dropdown
                            fluid
                            placeholder="Size"
                            search
                            selection
                            options={sizeOptions}
                            name="itemSize"
                            onChange={handleFormInput}
                        />
                    </Form.Input>
                    <Form.Input
                        label="Color"
                        placeholder="Brown"
                        width={MEDIUM}
                        name="itemColor"
                        onChange={handleFormInput}
                    />
                    <Form.Input
                        label="SKU"
                        placeholder="555088-105"
                        width={LARGE}
                        name="itemSKU"
                        onChange={handleFormInput}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        label="Purchased Where"
                        placeholder="Footlocker"
                        width={LARGE}
                        name="purchasedWhere"
                        onChange={handleFormInput}
                    />
                    <Form.Input label="Purchase Date" fluid disabled={false}>
                        <DatePicker
                            selected={dpPurchaseDate}
                            onChange={(date) => {
                                setPurchaseDate(date)
                                addDateField('purchasedDate', date)
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
                        name="purchasedRetail"
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
                        name="purchasedTax"
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
                        name="purchasedShipping"
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
                        name="purchasedTotal"
                        onChange={handleFormInput}
                    >
                        <Label basic>$</Label>
                        <input />
                    </Form.Input>
                </Form.Group>
                <br />
                <div>
                    <Checkbox
                        label="Item Already Sold?"
                        onChange={handleClear}
                    />
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
                                addDateField('soldDate', date)
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
                    <Form.TextArea
                        label="Notes"
                        placeholder="Sold to John Smith at Kobey's Swapmeet"
                        rows="3"
                        width={ABSOLUTE}
                        disabled={false}
                        name="notes"
                        onChange={handleFormInput}
                    />
                </Form.Group>
            </Form>
        </InventoryModal>
    )
}
export default AddItem
