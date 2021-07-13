import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <header className="cabecera">
      <h1>Items y usuarios</h1>
      <nav>
        <ul className="navegacion">
          <li>
            <NavLink to="/inicio" activeClassName="actual">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/listado" activeClassName="actual">
              Listado
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="actual">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" activeClassName="actual">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
