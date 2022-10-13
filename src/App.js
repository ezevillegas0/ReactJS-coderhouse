import './App.css';
import { useState } from 'react';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [page, setPage] = useState("list")

  const handleOnAdd = () => {
    console.log("se agrego al carrito!")
  } 
  
  return (
    <div className="App">
      <NavBar/>
      { page === "list" && <ItemListContainer greeting={"Bienvenidos a Sneakers House"}/>}
      { page === "detail" && <ItemDetailContainer />}
    </div>
  );
}

export default App;
