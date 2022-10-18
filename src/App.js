import './App.css';
import { useState, createContext } from 'react';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter> 
          <NavBar/>
          <Routes>
            <Route path= '/' element={<ItemListContainer greeting=    {"Bienvenidos a Sneakers House"}/>} />  
            <Route path= '/category/:categoryId' element={     <ItemListContainer />}/> 
            <Route path= '/detail/:productId' element={     <ItemDetailContainer />}/> 
            <Route path= '*' element={ <h1>404 NOT FOUND</h1>}/> 
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
