import React from 'react'
import styled from 'styled-components'
import { Container, Grid, Header } from 'semantic-ui-react'
import UserProfile from '../../components/UserProfile'

const MenuBarContainer = styled(Container)({
    height: '100px',
})

const ItemContainer = styled(Header)(
    ({ position, marginLeft, marginRight }) => ({
        marginLeft: position === 'left' ? '90px !important' : marginLeft,
        marginRight: position === 'right' ? '20px !important' : marginRight,
    })
)

const MenuBar = () => (
    <MenuBarContainer fluid>
        <Grid stretched centered>
            <Grid.Row centered stretched>
                <Grid.Column
                    textAlign="right"
                    verticalAlign="middle"
                    floated="right"
                >
                    <ItemContainer position="right">
                        <UserProfile />
                    </ItemContainer>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </MenuBarContainer>
)

export default MenuBar
