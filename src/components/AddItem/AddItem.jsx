import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

const AddItem = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Item</Button>}
    >
      <Modal.Header>Add Item</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group>
            <Form.Input required label="Name" placeholder="Air Jordan 1 High Mocha" width={7} />
            <Form.Input required label="Size" placeholder="10" width={2} />
            <Form.Input label="Color" placeholder="Brown" width={3} />
            <Form.Input label="SKU" placeholder="555088-105" width={4} />
          </Form.Group>
          <Form.Group>
            <Form.Input label="Purchased Where" placeholder="Footlocker" width={4} />
            <Form.Input label="Purchase Date" placeholder="08/25/2022" width={3} />
            <Form.Input label="Retail Price" placeholder="$180" width={2} />
            <Form.Input label="Tax" placeholder="$3.50" width={2} />
            <Form.Input label="Shipping" placeholder="$10" width={2} />
            <Form.Input required label="Purchase Total" placeholder="$204" width={2} />
          </Form.Group>
          <Form.Group>
            {/* Can move sell info into different modal */}
            <Form.Input label="Sold Where" placeholder="StockX" width={4} />
            <Form.Input label="Sell Date" placeholder="08/26/2022" width={3} />
            <Form.Input label="Sell Price" placeholder="$1000" width={2} />
            <Form.Input label="Tax" placeholder="$3.50" width={2} />
            <Form.Input label="Shipping" placeholder="$10" width={2} />
            <Form.Input label="Sell Total" placeholder="$950" width={2} />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Notes"
              placeholder="Sold to John Smith at Kobey's Swapmeet"
              control="textarea"
              rows="3"
              width="16"
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Add to Inventory"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}
export default AddItem
