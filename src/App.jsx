import React from 'react'
import { Grid, Sidebar, Menu, Icon, Segment } from 'semantic-ui-react'

import './styles/app.css'
import SIDEBAR_STYLE from './styles/side-bar'

const App = () => (
  <Sidebar.Pushable as={Segment} style={SIDEBAR_STYLE}>
    <Sidebar
      as={Menu}
      animation="Uncover"
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

    <Sidebar.Pusher>
      <Grid padded>
        <Grid.Row>Dashboard</Grid.Row>
        <Grid.Row>row 1</Grid.Row>
        <Grid.Row>row 2</Grid.Row>
      </Grid>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default App
