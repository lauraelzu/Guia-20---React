import logo from './logo.svg';
import './App.css';

import Main from './componentes/Main';
import Personajes from './componentes/Personajes';
import NavBar from './componentes/NavBar';
import Buscador from './componentes/Buscador';

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <NavBar></NavBar> {/*para que esté siempre disponible, debe estar antes de <Routes> (porque no es una ruta)*/}

          <Routes>
            <Route exact path='/' element={<Main/>}></Route>
            <Route exact path='/personajes' element={<Personajes/>}></Route>
            <Route exact path='/buscador' element={<Buscador/>}></Route>
          </Routes>

          {/*si hubiera footer, se colocaría acá para que esté siempre disponible */}
        </Router>

      </header>
    </div>
  );
}
