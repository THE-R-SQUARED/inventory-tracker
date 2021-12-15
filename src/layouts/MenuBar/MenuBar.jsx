import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import UserProfile from '../../components/UserProfile'

const MenuBar = () => (
  // <Container fluid>
  <Grid columns={2} stackable>
    <Grid.Row>
      <Grid.Column textAlign="left">
        <Header>Dashboard</Header>
      </Grid.Column>
      <Grid.Column textAlign="right">
        <UserProfile />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default MenuBar

/*
  <Grid>
    <Grid.Row>
      <Grid.Column>Dashboard</Grid.Column>
      <Grid.Column>
        <UserProfile />
      </Grid.Column>
    </Grid.Row>
  </Grid>
*/
