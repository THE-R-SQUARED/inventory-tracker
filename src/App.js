import logo from './assets/logo.svg';
import './styles/app.css';
import Modal from './components/Modal';
import AddItem from './components/AddItem';

function App() {
  return (
    <div className='App'>
      <Modal></Modal>
      <AddItem></AddItem>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Modal></Modal>
    </div>
  );
}

export default App;
