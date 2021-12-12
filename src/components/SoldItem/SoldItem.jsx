import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

const SoldItem = () => {
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
            <Form.Input label="Sold Where" placeholder="StockX" width={4} />
            <Form.Input label="Sell Date" placeholder="08/26/2022" width={3} />
            <Form.Input label="Sell Price" placeholder="$1000" width={2} />
            <Form.Input label="Tax" placeholder="$3.50" width={2} />
            <Form.Input label="Shipping" placeholder="$10" width={2} />
            <Form.Input label="Sell Total" placeholder="$950" width={2} />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Mark as Sold"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}
export default SoldItem
