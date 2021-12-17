import React from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

import './styles/app.css'

import AddItem from './components/AddItem'
import ModifyItem from './components/ModifyItem'
import RemoveItem from './components/RemoveItem'
import SoldItem from './components/SoldItem'
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

const App = () => (
  <PageContainer>
    <SideBar />
    <ContentContainer>
      <MenuBar />
      <Container fluid textAlign="center">
        {` pages go here (like the inventory, sales and home page)`}
        <AddItem />
        <ModifyItem />
        <RemoveItem />
        <SoldItem />
      </Container>
    </ContentContainer>
  </PageContainer>
)

export default App
