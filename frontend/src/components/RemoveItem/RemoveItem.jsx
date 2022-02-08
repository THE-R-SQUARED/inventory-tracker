import React from 'react'
import { Modal } from 'semantic-ui-react'
import InventoryModal from '../InventoryModal'

const RemoveItem = () => {
    return (
        <InventoryModal
            modalButtonText="Remove"
            modalHeaderText="Remove Item"
            modalColor="red"
            modalIcon="trash"
            modalActionButtonText="Yes, remove"
            modalCSS="remove-item-modal-header"
        >
            <Modal.Content>
                <p>Are you sure you want to remove this item?</p>
            </Modal.Content>
        </InventoryModal>
    )
}

export default RemoveItem
