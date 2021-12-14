import React from 'react'

import MenuBar from './layouts/MenuBar'
import SideBar from './layouts/SideBar'
import InventoryPage from './pages/InventoryPage/InventoryPage'

const App = () => (
  <SideBar>
    <MenuBar />
    <InventoryPage />
  </SideBar>
)

export default App
