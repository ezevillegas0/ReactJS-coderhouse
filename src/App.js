import './App.css';
import NavBar from './componentes/NavBar/navBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Cart from  './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter> 
            <NavBar/>
            <Routes>
              <Route path= '/' element={<ItemListContainer greeting= {"Bienvenidos a Sneakers House!"}/>} />  
              <Route path= '/category/:categoryId' element={ <ItemListContainer greeting= {"Bienvenidos a Sneakers House!"} />}/> 
              <Route path= '/detail/:productId' element={ <ItemDetailContainer />}/> 
              <Route path= '/cart' element={ <Cart />}/> 
              <Route path='/checkout' element={<Checkout />}/> 
              <Route path= '*' element={ <h1>404 NOT FOUND</h1>}/> 
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
