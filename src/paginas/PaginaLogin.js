import { useState } from "react";

export const PaginaLogin = (props) => {
  const { setLogueado, apiURL } = props;
  const [username, setUsername] = useState("");
  const [contrasenya, setContrasenya] = useState("");
  const [error, setError] = useState(false);

  const submitCredenciales = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    const resp = await fetch(`${apiURL}/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, contrasenya }),
    });
    if (resp.ok) {
      setError(false);
      const { token } = await resp.json();
      localStorage.setItem("token", token);
      setLogueado(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form className="row" noValidate onSubmit={submitCredenciales}>
        <div className="form-group col-4">
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            type="text"
            id="username"
            placeholder="Introduce tu nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="form-group col-4">
          <label htmlFor="contrasenya">Contraseña:</label>
          <input
            className="form-control"
            type="password"
            id="contrasenya"
            placeholder="Introduce tu contraseña"
            value={contrasenya}
            onChange={(e) => setContrasenya(e.target.value)}
          ></input>
        </div>
        <div className="col-2 mt-auto mb-auto">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      {error && <p className="text-danger">Credenciales incorrectas</p>}
    </>
  );
};
