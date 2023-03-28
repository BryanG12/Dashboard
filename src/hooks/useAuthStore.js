import { useDispatch, useSelector } from "react-redux";
import { apiVenta } from "../api";
import {
  clearErrorMessage,
  onCheckingCredentials,
  onLogin,
  onLogout,
} from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ User, Password }) => {
    dispatch(onCheckingCredentials());
    try {
      const { data } = await apiVenta.post("/auth", { User, Password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.user, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  return {
    errorMessage,
    status,
    user,

    startLogin,
  };
};
