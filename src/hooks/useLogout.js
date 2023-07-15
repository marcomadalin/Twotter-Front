import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  async function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    dispatch({ type: "LOGOUT" });
    navigate("/explore");
  }

  return { logout };
}
