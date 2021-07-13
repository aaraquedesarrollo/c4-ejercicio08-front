import { useRedirectToLogin } from "../hooks/useRedirectToLogin";

export const PaginaInicio = (props) => {
  const redirectToLogin = useRedirectToLogin();
  const { logueado } = props;

  redirectToLogin(logueado);

  return (
    <div className="inicio row h-100">
      <p className="col-12 text-center">
        Bienvenido a la mejor pagina de listado de items
      </p>
    </div>
  );
};
