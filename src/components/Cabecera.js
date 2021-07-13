import { NavLink } from "react-router-dom";

export const Cabecera = (props) => {
  const { logueado, setLogueado } = props;

  const logout = () => {
    localStorage.removeItem("token");
    setLogueado(false);
  };

  return (
    <header className="cabecera row">
      <h1 className="col-8">Items y usuarios</h1>
      <nav className="col-4 text-center align-self-center">
        <ul className="navegacion row list-unstyled ">
          {logueado && (
            <>
              {" "}
              <li className="col">
                <NavLink to="/inicio" activeClassName="actual">
                  Inicio
                </NavLink>
              </li>
              <li className="col">
                <NavLink to="/listado" activeClassName="actual">
                  Listado
                </NavLink>
              </li>{" "}
            </>
          )}
          {!logueado && (
            <li className="col">
              <NavLink to="/login" activeClassName="actual">
                Login
              </NavLink>
            </li>
          )}
          {logueado && (
            <li className="col" onClick={logout}>
              Logout
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
