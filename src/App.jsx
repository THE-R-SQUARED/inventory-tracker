import React from 'react'
import { Grid, Menu, Sidebar, Icon, Container } from 'semantic-ui-react'
// import styled from 'styled-components'

import './styles/app.css'

// import MenuBar from './layouts/MenuBar'
// import SideBar from './layouts/SideBar'
// import InventoryPage from './pages/InventoryPage/InventoryPage'

// const GridContainer = styled(Grid)({
//   minHeight: '100vh',
// })

const App = () => (
  <Grid stretched>
    <Grid.Row>
      <Grid.Column>
        <Sidebar
          as={Menu}
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
          direction="left"
          left
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Container fluid>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column>
                  <Container> test1</Container>
                </Grid.Column>
                <Grid.Column>
                  <Container> test2</Container>
                </Grid.Column>
                <Grid.Column>
                  <Container> test3</Container>
                </Grid.Column>
                <Grid.Column>
                  <Container> test4</Container>
                </Grid.Column>
                <Grid.Column>
                  <Container> test5</Container>
                </Grid.Column>
                <Grid.Column>
                  <Container> test6</Container>
                </Grid.Column>
                <Grid.Column>
                  <Container> test7</Container>
                </Grid.Column>
                <Grid.Column>
                  <Container> test8</Container>
                </Grid.Column>
                <Grid.Column>
                  <Container> test9</Container>
                </Grid.Column>
                <Grid.Column>
                  <Container> test10</Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Sidebar.Pusher>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

/*
  <div>
    <div className="ui grid">
      <div className="row">
        <div className="column">
          <div id="maincontent" className="ui bottom attached segment pushable">
            <div id="sidebar" className="ui visible left vertical sidebar menu">
              first
            </div>
            <div id="content" className="pusher">
              <div className="ui basic segment">
                <h3 className="ui header">Application Content</h3>
                <p>First paragraph...</p>
                <p>Second paragraph...</p>
                <p>Third paragraph...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
*/

/*

  <GridContainer>
    <Grid columns={2} style={{ minHeight: '100vh' }}>
      <Grid.Column width={3}>
        <SideBar />
      </Grid.Column>
      <Grid.Column>
        <Button />
      </Grid.Column>
    </Grid>
  </GridContainer>
  */

export default App
