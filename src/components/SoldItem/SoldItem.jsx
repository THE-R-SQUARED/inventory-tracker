import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { SMALL, MEDIUM, LARGE } from '../../constants/form-styling'
import '../../styles/modal.css'

const SoldItem = () => {
  const [open, isModalOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => isModalOpen(false)}
      onOpen={() => isModalOpen(true)}
      open={open}
      trigger={
        <Button inverted color="green">
          Mark Sold
        </Button>
      }
    >
      <Modal.Header id="sold-item-modal-header">Mark Sold</Modal.Header>
      <Modal.Content>
        <Form>
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
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => isModalOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Mark as Sold"
          labelPosition="right"
          icon="checkmark"
          inverted
          onClick={() => isModalOpen(false)}
          color="green"
        />
      </Modal.Actions>
    </Modal>
  )
}
export default SoldItem
