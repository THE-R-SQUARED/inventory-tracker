import React, { useState } from 'react'
import { Form, Label, Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import InventoryModal from '../InventoryModal'
import {
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
    ABSOLUTE,
} from '../../constants/form-styling'
import SIZES from '../../constants/item-info'
import 'react-datepicker/dist/react-datepicker.css'

const sizeOptions = SIZES.map((size) => ({
    key: size,
    text: size,
    value: size,
}))

const ModifyItem = () => {
    const [dpPurchaseDate, setPurchaseDate] = useState('')
    const [dpSoldDate, setSoldDate] = useState('')
    return (
        <InventoryModal
            modalButtonText="Edit"
            modalHeaderText="Edit Item"
            modalColor="yellow"
            modalIcon="edit"
            modalActionButtonText="Edit"
            modalCSS="modify-item-modal-header"
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
                    <Form.Input
                        label="Color"
                        placeholder="Brown"
                        width={MEDIUM}
                    />
                    <Form.Input
                        label="SKU"
                        placeholder="555088-105"
                        width={LARGE}
                    />
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
                        label="Purchase Total"
                        placeholder="204"
                        type="number"
                        width={SMALL}
                        labelPosition="left"
                    >
                        <Label basic>$</Label>
                        <input />
                    </Form.Input>
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        label="Sold Where"
                        placeholder="StockX"
                        width={LARGE}
                    />
                    <Form.Input label="Sell Date" fluid>
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

export default ModifyItem
