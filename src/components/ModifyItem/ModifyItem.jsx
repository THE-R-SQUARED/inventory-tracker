import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
  ABSOLUTE,
} from '../../constants/form-styling'

const ModifyItem = () => {
  const [open, isModalOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => isModalOpen(false)}
      onOpen={() => isModalOpen(true)}
      open={open}
      trigger={<Button>Edit</Button>}
      className="edit-item-modal"
    >
      <Modal.Header>Edit Item</Modal.Header>
      <Modal.Content>
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
              placeholder="$1000"
              width={SMALL}
            />
            <Form.Input label="Tax" placeholder="$3.50" width={SMALL} />
            <Form.Input label="Shipping" placeholder="$10" width={SMALL} />
            <Form.Input
              required
              label="Sell Total"
              placeholder="$950"
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
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => isModalOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Edit"
          labelPosition="right"
          icon="checkmark"
          onClick={() => isModalOpen(false)}
          color="yellow"
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModifyItem
