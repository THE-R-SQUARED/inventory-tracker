import React from 'react'
import { Grid, Menu, Sidebar, Icon, Container } from 'semantic-ui-react'
import logo from './assets/logo.svg'
// import styled from 'styled-components'

import './styles/app.css'

// import MenuBar from './layouts/MenuBar'
// import SideBar from './layouts/SideBar'
// import InventoryPage from './pages/InventoryPage/InventoryPage'

// const GridContainer = styled(Grid)({
//   minHeight: '100vh',
// })

const App = () => (
  <Container fluid>
    <Sidebar
      as={Menu}
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
      direction="left"
      left
      borderless
    >
      <Menu.Header>
        <img
          src={logo}
          style={{
            height: '100px',
            width: '100px',
          }}
          className="App-logo"
          alt="logo"
        />
      </Menu.Header>
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
          <Grid.Column>
            <Container> test11</Container>
          </Grid.Column>
          <Grid.Column>
            <Container> test12</Container>
          </Grid.Column>
          <Grid.Column>
            <Container> test 13</Container>
          </Grid.Column>
          <Grid.Column>
            <Container> test 13</Container>
          </Grid.Column>
          <Grid.Column>
            <Container> test 13</Container>
          </Grid.Column>
          <Grid.Column>
            <Container> test 16</Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Sidebar.Pusher>
  </Container>
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
