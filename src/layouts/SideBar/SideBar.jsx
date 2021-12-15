import React, { useState } from 'react'
import styled from 'styled-components'
import { Menu, Icon } from 'semantic-ui-react'

import logo from '../../assets/logo.svg'

const Logo = styled.img({
  height: '100px',
  width: '100px',
})

const Link = styled.a({
  color: 'white !important',
  marginTop: '15px',
})

const SideBarContainer = styled.div({
  width: '170px',
})

const SideBarMenu = styled(Menu)({
  height: '100%',
  borderRadius: '0 !important',
})

const SideBarMenuItemContainer = styled(Menu.Menu)({
  marginTop: '50px !important',
})

const SideBarMenuItem = styled(Menu.Item)({
  padding: '20px',
})

const SideBar = () => {
  const [activeItem, setActiveItem] = useState(null)

  const handleOnClick = () => setActiveItem('clicked')

  return (
    <SideBarContainer>
      <SideBarMenu
        icon="labeled"
        vertical
        borderless
        size="large"
        fluid
        inverted
      >
        <Menu.Header>
          <Logo src={logo} className="App-logo" alt="logo" />
        </Menu.Header>
        <SideBarMenuItemContainer>
          <SideBarMenuItem
            className="item"
            name="home"
            as={Link}
            active={activeItem === 'home'}
            onClick={handleOnClick}
          >
            <Icon name="home" />
            Home
          </SideBarMenuItem>
          <SideBarMenuItem
            className="item"
            name="inventory"
            as={Link}
            active={activeItem === 'inventory'}
            onClick={handleOnClick}
          >
            <Icon name="book" />
            Inventory
          </SideBarMenuItem>
          <SideBarMenuItem
            className="item"
            name="sales"
            as={Link}
            active={activeItem === 'sales'}
            onClick={handleOnClick}
          >
            <Icon name="dollar sign" />
            Sales
          </SideBarMenuItem>
        </SideBarMenuItemContainer>
      </SideBarMenu>
    </SideBarContainer>
  )
}

export default SideBar