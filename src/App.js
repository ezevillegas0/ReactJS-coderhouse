import './App.css';
import NavBar from './componentes/NavBar/navBar';
//import AvatarJsx from "./componentes/AvatarJsx/AvatarJsx"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Counter from './componentes/Counter/Counter';

function App() {

  const handleOnAdd = () => {
    console.log("se agrego al carrito!")
  } 
  
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos a Sneakers House"}/>
        <Counter onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
