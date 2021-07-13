import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Cabecera } from "./components/Cabecera";
import { PaginaInicio } from "./paginas/PaginaInicio";
import { PaginaListado } from "./paginas/PaginaListado";
import { PaginaLogin } from "./paginas/PaginaLogin";

function App() {
  return (
    <Router>
      <Cabecera />
      <Switch>
        <Route path="/inicio" exact>
          <PaginaInicio />
        </Route>
        <Route path="/listado" exact>
          <PaginaListado />
        </Route>
        <Route path="/login" exact>
          <PaginaLogin />
        </Route>
        <Route path="**" exact>
          <PaginaInicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
