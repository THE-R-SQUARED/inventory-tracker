import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const RemoveItem = () => {
  const [open, isModalOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => isModalOpen(false)}
      onOpen={() => isModalOpen(true)}
      open={open}
      trigger={<Button>Remove</Button>}
    >
      <Modal.Header>Remove Item</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to remove this item?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => isModalOpen(false)}>
          No, do not remove
        </Button>
        <Button content="Yes, remove" inverted onClick={() => isModalOpen(false)} color="red" />
      </Modal.Actions>
    </Modal>
  )
}

export default RemoveItem
