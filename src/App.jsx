import React from 'react'

import logo from './assets/logo.svg'
import './styles/app.css'
import InventoryModal from './components/InventoryModal'
// import AddItem from './components/AddItem'
// import SoldItem from './components/SoldItem'
// import ModifyItem from './components/ModifyItem'
// import RemoveItem from './components/RemoveItem'

const App = () => (
  <div className="App">
    <InventoryModal type="add" />
    <InventoryModal type="sold" />
    <InventoryModal type="modify" />
    <InventoryModal type="remove" />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
)

export default App
