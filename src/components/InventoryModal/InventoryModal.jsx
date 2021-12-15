import React from 'react'
import { Button, Modal, ModalContent } from 'semantic-ui-react'
import AddItem from '../AddItem'
import SoldItem from '../SoldItem'
import ModifyItem from '../ModifyItem'
import RemoveItem from '../RemoveItem'
import '../../styles/modal.css'

const modalTypes = {
  add: {
    modalButtonText: 'Add Item',
    modalHeaderText: 'Add Item',
    modalColor: 'blue',
    modalIcon: 'plus',
    modalActionButtonText: 'Add to Inventory',
    modalContent: <AddItem />,
    modalCSS: 'add-item-modal-header',
  },
  sold: {
    modalButtonText: 'Mark Sold',
    modalHeaderText: 'Mark Sold',
    modalColor: 'green',
    modalIcon: 'checkmark',
    modalActionButtonText: 'Mark as Sold',
    modalContent: <SoldItem />,
    modalCSS: 'sold-item-modal-header',
  },
  modify: {
    modalButtonText: 'Edit',
    modalHeaderText: 'Edit Item',
    modalColor: 'yellow',
    modalIcon: 'edit',
    modalActionButtonText: 'Edit',
    modalContent: <ModifyItem />,
    modalCSS: 'modify-item-modal-header',
  },
  remove: {
    modalButtonText: 'Remove',
    modalHeaderText: 'Remove Item',
    modalColor: 'red',
    modalIcon: 'trash',
    modalActionButtonText: 'Yes, remove',
    modalContent: <RemoveItem />,
    modalCSS: 'remove-item-modal-header',
  },
}

const InventoryModal = ({ type }) => {
  const [open, isModalOpen] = React.useState(false)
  const {
    modalButtonText,
    modalHeaderText,
    modalColor,
    modalIcon,
    modalActionButtonText,
    modalContent,
    modalCSS,
  } = modalTypes[type]
  return (
    <Modal
      onClose={() => isModalOpen(false)}
      onOpen={() => isModalOpen(true)}
      open={open}
      trigger={
        <Button inverted color={modalColor}>
          {modalButtonText}
        </Button>
      }
    >
      <Modal.Header id={modalCSS}>{modalHeaderText}</Modal.Header>

      <ModalContent>{modalContent}</ModalContent>

      <Modal.Actions>
        <Button color="black" onClick={() => isModalOpen(false)}>
          Cancel
        </Button>
        <Button
          content={modalActionButtonText}
          labelPosition="right"
          icon={modalIcon}
          inverted
          onClick={() => isModalOpen(false)}
          color={modalColor}
        />
      </Modal.Actions>
    </Modal>
  )
}

export default InventoryModal
