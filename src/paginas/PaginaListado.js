import { useCallback, useEffect, useState } from "react";
import { useRedirectToLogin } from "../hooks/useRedirectToLogin";

export const PaginaListado = (props) => {
  const redirectToLogin = useRedirectToLogin();
  const { logueado, apiURL } = props;

  const [listaItems, setListaItems] = useState([]);

  const obtenerItems = useCallback(async () => {
    const token = localStorage.getItem("token");

    console.log("Obteniendo items...");
    const resp = await fetch(`${apiURL}/items/listado`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (resp.ok) {
      setListaItems(await resp.json());
    }
  }, [apiURL]);

  redirectToLogin(logueado);

  useEffect(() => obtenerItems(), [obtenerItems]);

  return (
    <>
      <h2>Listado de items: </h2>
      <ul>
        {listaItems.map((item) => (
          <li key={item._id}>{item.nombre}</li>
        ))}
      </ul>
    </>
  );
};
