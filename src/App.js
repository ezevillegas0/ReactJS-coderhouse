import './App.css';
import { useState } from 'react';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const handleOnAdd = () => {
    console.log("se agrego al carrito!")
  } 
  
  return (
    <div className="App">

      <BrowserRouter> 
        <NavBar/>
        <Routes>
          <Route path= '/' element={<ItemListContainer greeting={"Bienvenidos a Sneakers House"}/>} />  
          <Route path= '/category/:categoryId' element={ <ItemListContainer />}/> 
          <Route path= '/detail/:productId' element={ <ItemDetailContainer />}/> 
          <Route path= '*' element={ <h1>404 NOT FOUND</h1>}/> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
