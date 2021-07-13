import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Cabecera } from "./components/Cabecera";
import { PaginaInicio } from "./paginas/PaginaInicio";
import { PaginaListado } from "./paginas/PaginaListado";
import { PaginaLogin } from "./paginas/PaginaLogin";

function App() {
  const [logueado, setLogueado] = useState(false);

  const apiURL = "https://c4-ejercicio08-back.herokuapp.com";

  return (
    <div className="container min-vh-100">
      <Router>
        <Cabecera logueado={logueado} setLogueado={setLogueado} />
        <Switch>
          <Route path="/inicio" exact>
            <PaginaInicio logueado={logueado} />
          </Route>
          <Route path="/listado" exact>
            <PaginaListado logueado={logueado} apiURL={apiURL} />
          </Route>
          <Route path="/login" exact>
            <PaginaLogin setLogueado={setLogueado} apiURL={apiURL} />
          </Route>
          <Route path="**" exact>
            <PaginaInicio logueado={logueado} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
