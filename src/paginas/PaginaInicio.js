import { useHistory } from "react-router-dom";

export const PaginaInicio = (props) => {
  const history = useHistory();
  const { logueado } = props;

  if (!logueado) {
    history.push("/login");
  }

  return (
    <div className="inicio row h-100">
      <p className="col-12 text-center">
        Bienvenido a la mejor pagina de listado de items
      </p>
    </div>
  );
};
