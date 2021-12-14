import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

const SideBar = () => {
  // const [activeItem, setActiveItem] = useState(null)

  // const handleItemClick = () => setActiveItem('clicked')

  return (
    <Menu pointing secondary>
      <Container>
        <Menu.Item name="Landing" />
        <Menu.Item name="home" />
        <Menu.Item name="Account" />
      </Container>
    </Menu>
  )
}

export default SideBar

/*
    <Menu icon="labeled" vertical borderless size="small">
      <Menu.Item
        name="gamepad"
        active={activeItem === 'gamepad'}
        onClick={handleItemClick}
      >
        <Icon name="gamepad" />
        Games
      </Menu.Item>

      <Menu.Item
        name="video camera"
        active={activeItem === 'video camera'}
        onClick={handleItemClick}
      >
        <Icon name="video camera" />
        Channels
      </Menu.Item>

      <Menu.Item
        name="video play"
        active={activeItem === 'video play'}
        onClick={handleItemClick}
      >
        <Icon name="video play" />
        Videos
      </Menu.Item>
    </Menu>
*/
