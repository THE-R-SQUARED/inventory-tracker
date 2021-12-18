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
}) => {
  const [open, isModalOpen] = React.useState(false)

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

      <ModalContent>{children}</ModalContent>

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
