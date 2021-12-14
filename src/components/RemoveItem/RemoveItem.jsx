import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import '../../styles/modal.css'

const RemoveItem = () => {
  const [open, isModalOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => isModalOpen(false)}
      onOpen={() => isModalOpen(true)}
      open={open}
      trigger={
        <Button inverted color="red">
          Remove
        </Button>
      }
    >
      <Modal.Header id="remove-item-modal-header">Remove Item</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to remove this item?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => isModalOpen(false)}>
          No, do not remove
        </Button>
        <Button
          content="Yes, remove"
          labelPosition="right"
          icon="trash"
          inverted
          onClick={() => isModalOpen(false)}
          color="red"
        />
      </Modal.Actions>
    </Modal>
  )
}

export default RemoveItem
