import { useAuthContext } from "./useAuthContext";

export function useLogout() {
  const { dispatch } = useAuthContext();

  async function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    dispatch({ type: "LOGOUT" });
  }

  return { logout };
}
