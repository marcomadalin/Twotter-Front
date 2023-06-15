import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) throw Error("Context out of bounds");
  return context;
}
