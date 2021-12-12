import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

import WIDTHS from '../../constants/form-styling'

const AddItem = () => {
  const [open, isModalOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => isModalOpen(false)}
      onOpen={() => isModalOpen(true)}
      open={open}
      trigger={<Button>Add Item</Button>}
    >
      <Modal.Header>Add Item</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group>
            <Form.Input
              required
              label="Name"
              placeholder="Air Jordan 1 High Mocha"
              width={WIDTHS.XLARGE}
            />
            <Form.Input required label="Size" placeholder="10" width={WIDTHS.SMALL} />
            <Form.Input label="Color" placeholder="Brown" width={WIDTHS.MEDIUM} />
            <Form.Input label="SKU" placeholder="555088-105" width={WIDTHS.LARGE} />
          </Form.Group>
          <Form.Group>
            <Form.Input label="Purchased Where" placeholder="Footlocker" width={WIDTHS.LARGE} />
            <Form.Input label="Purchase Date" placeholder="08/25/2022" width={WIDTHS.MEDIUM} />
            <Form.Input label="Retail Price" placeholder="$180" width={WIDTHS.SMALL} />
            <Form.Input label="Tax" placeholder="$3.50" width={WIDTHS.SMALL} />
            <Form.Input label="Shipping" placeholder="$10" width={WIDTHS.SMALL} />
            <Form.Input required label="Purchase Total" placeholder="$204" width={WIDTHS.SMALL} />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Notes"
              placeholder="Sold to John Smith at Kobey's Swapmeet"
              control="textarea"
              rows="3"
              width={WIDTHS.ABSOLUTE}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => isModalOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Add to Inventory"
          labelPosition="right"
          icon="checkmark"
          onClick={() => isModalOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}
export default AddItem
