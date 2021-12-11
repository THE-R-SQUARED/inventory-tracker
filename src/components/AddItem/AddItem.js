import React from 'react';
import { Button, Header, Modal, Form } from 'semantic-ui-react';



const AddItem = () => {
    const [open, setOpen] = React.useState(false);

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
                    <Form.Input label='Item Name' placeholder='First Name' width={6} />
                    <Form.Input label='Middle Name' placeholder='Middle Name' width={4} />
                    <Form.Input label='Last Name' placeholder='Last Name' width={6} />
                </Form.Group>
                <Form.Group>
                    <Form.Input placeholder='2 Wide' width={2} />
                    <Form.Input placeholder='12 Wide' width={12} />
                    <Form.Input placeholder='2 Wide' width={2} />
                </Form.Group>
                <Form.Group>
                    <Form.Input placeholder='8 Wide' width={8} />
                    <Form.Input placeholder='6 Wide' width={6} />
                    <Form.Input placeholder='2 Wide' width={2} />
                </Form.Group>
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
                Nope
            </Button>
            <Button
                content="Yep, that's me"
                labelPosition='right'
                icon='checkmark'
                onClick={() => setOpen(false)}
                positive
            />
        </Modal.Actions>
        </Modal>
    );
};
export default AddItem;
