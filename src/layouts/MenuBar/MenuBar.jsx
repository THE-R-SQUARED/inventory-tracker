import React from 'react'
import { Grid } from 'semantic-ui-react'

const MenuBar = () => (
  <Grid>
    <Grid.Column floated="right">icon</Grid.Column>
    <Grid.Column floated="right">avatar</Grid.Column>
    <Grid.Column floated="right">username</Grid.Column>
  </Grid>
)

export default MenuBar
