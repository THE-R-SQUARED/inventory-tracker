import React from 'react'
import { Sidebar, Menu, Icon, Segment } from 'semantic-ui-react'

const SideBar = ({ children }) => (
  <Sidebar.Pushable
    as={Segment}
    style={{ border: 0, minHeight: '100vh', borderRadius: 0 }}
  >
    <Sidebar
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="book" />
        Inventory
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="dollar sign" />
        Sales
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>{children}</Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SideBar
