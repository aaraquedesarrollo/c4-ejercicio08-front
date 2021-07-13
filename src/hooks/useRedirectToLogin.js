import { useHistory } from "react-router-dom";

export const useRedirectToLogin = (logueado) => {
  const history = useHistory();

  const redirectToLogin = (logueado) => {
    if (!logueado) {
      history.push("/login");
    }
  };

  return redirectToLogin;
};
