import React, { useState } from 'react'
import styled from 'styled-components'
import { Menu, Icon } from 'semantic-ui-react'

import logo from '../../assets/project-logo.png'

const SideBarMenuContainer = styled(Menu)({
  height: '100%',
  borderRadius: '0 !important',
})

const SideBarMenuItem = styled(Menu.Item)({
  padding: '20px',
})

const SideBarMenuItemContainer = styled(Menu.Menu)({
  marginTop: '50px !important',
})

const Logo = styled.img({
  height: '90px',
  width: '90px',
  marginTop: '20px',
})

const Link = styled.a({
  color: 'white !important',
  marginTop: '15px',
})

const SideBarMenu = () => {
  const [activeItem, setActiveItem] = useState(null)

  const handleOnClick = () => setActiveItem('clicked')

  return (
    <SideBarMenuContainer
      icon="labeled"
      vertical
      borderless
      size="massive"
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
    </SideBarMenuContainer>
  )
}

export default SideBarMenu
