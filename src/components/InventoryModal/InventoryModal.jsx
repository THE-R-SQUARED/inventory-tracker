import React from 'react'
import { Button, Modal, ModalContent } from 'semantic-ui-react'
import '../../styles/modal.css'

const InventoryModal = ({
  children,
  modalButtonText,
  modalHeaderText,
  modalColor,
  modalIcon,
  modalActionButtonText,
  modalCSS,
  onModalSubmit,
}) => {
  const [open, isModalOpen] = React.useState(false)

  const handleOpen = () => {
    isModalOpen(true)
  }

  const handleClose = () => {
    isModalOpen(false)
  }

  const handleSubmit = () => {
    console.log('calling handleSubit in InventoryModal')
    handleClose()
    onModalSubmit()
  }

  return (
    <Modal
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      trigger={
        <Button inverted color={modalColor}>
          {modalButtonText}
        </Button>
      }
    >
      <Modal.Header id={modalCSS}>{modalHeaderText}</Modal.Header>

      <ModalContent>{children}</ModalContent>

      <Modal.Actions>
        <Button color="black" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          content={modalActionButtonText}
          labelPosition="right"
          icon={modalIcon}
          inverted
          onClick={handleSubmit}
          color={modalColor}
        />
      </Modal.Actions>
    </Modal>
  )
}

export default InventoryModal
