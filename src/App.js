import './App.css';
import NavBar from './componentes/NavBar/navBar';
import AvatarJsx from "./componentes/AvatarJsx/AvatarJsx"

function App() {
  return (
    <div className="App">
        <NavBar/>
        <AvatarJsx id={1} color={"red"} component={<h1>Andres</h1>}/>
        <AvatarJsx id={2} color={"blue"} component={<h2>Sebastian</h2>}/>
        <AvatarJsx id={3} color={"white"} component={<button>Haceme click</button>}/>
    </div>
  );
}

export default App;
