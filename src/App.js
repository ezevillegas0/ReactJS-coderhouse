import './App.css';
import NavBar from './componentes/NavBar/navBar';
//import AvatarJsx from "./componentes/AvatarJsx/AvatarJsx"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos a Sneakers House"}/>
    </div>
  );
}

export default App;
