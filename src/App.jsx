import React from 'react'
import { Menu, Sidebar, Icon, Container } from 'semantic-ui-react'
import styled from 'styled-components'
import logo from './assets/logo.svg'

import './styles/app.css'

import MenuBar from './layouts/MenuBar'

const PageContainer = styled.div({
  display: 'absolute',
  minHeight: '100vh',
  // width: `calc(100 % -'150px')`,
  // left: `calc(100 % -'250px')`,
})

const Logo = styled.img({
  height: '100px',
  width: '100px',
})

const SideBarMenu = styled(Menu.Menu)({
  marginTop: '50px !important',
})

const Link = styled.a({
  color: 'white !important',
  marginTop: '35px',
})

// See how this would work with react nav
const App = () => (
  <Container fluid>
    <Sidebar
      as={Menu}
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
      left
      borderless
      size="massive"
    >
      <Menu.Header>
        <Logo src={logo} className="App-logo" alt="logo" />
      </Menu.Header>
      <SideBarMenu>
        <Menu.Item as={Link}>
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={Link}>
          <Icon name="book" />
          Inventory
        </Menu.Item>
        <Menu.Item as={Link}>
          <Icon name="dollar sign" />
          Sales
        </Menu.Item>
      </SideBarMenu>
    </Sidebar>
    <Sidebar.Pusher>
      <PageContainer fluid>
        <Container>
          <MenuBar />
        </Container>
        <Container>rest of page</Container>
      </PageContainer>
    </Sidebar.Pusher>
  </Container>
)

export default App
