import React from 'react'
import { Form } from 'semantic-ui-react'
import {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
  ABSOLUTE,
} from '../../constants/form-styling'

const AddItem = () => {
  return (
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
  )
}
export default AddItem
