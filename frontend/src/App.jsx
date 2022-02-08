import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import axios from 'axios'

import './styles/app.css'

import AddItem from './components/AddItem'
import InventoryTable from './components/InventoryTable'
import SideBar from './layouts/SideBar'
import MenuBar from './layouts/MenuBar'

const PageContainer = styled.div({
    display: 'flex',
    minHeight: '100vh',
})

const ContentContainer = styled.div({
    width: '100%',
    textAlign: 'right',
    height: '100%',
})

const App = () => {
    const [addItemValues, setAddItemValues] = useState({})

    const handleAddItemSubmit = ({ addItemFormFields }) => {
        console.log('calling handleSubmit in App', addItemValues)
        console.log(addItemFormFields)
        setAddItemValues(addItemFormFields)
        // console.log(JSON.stringify(addItemValues))
        axios
            .post(process.env.ITEMS_ENDPOINT, JSON.parse(addItemFormFields))
            .then((res) => console.log(res.data))
    }

    return (
        <PageContainer>
            <SideBar />
            <ContentContainer>
                <MenuBar />
                <Container fluid textAlign="center">
                    <AddItem onSubmit={handleAddItemSubmit} />
                    <div className="inventory-table-container">
                        <InventoryTable />
                    </div>
                </Container>
            </ContentContainer>
        </PageContainer>
    )
}

export default App
