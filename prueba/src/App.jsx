import './App.css'
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className='container'>  
      <NavBar />
      <ItemListContainer greeting={"Lista de productos"} />
    </div>
  )
}

export default App
