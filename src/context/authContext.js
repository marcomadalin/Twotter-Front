import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { API_URL } from "../utils/Constants";

export const AuthContext = createContext();

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload.user, token: action.payload.token };
    case "UPDATE":
      return { user: action.payload.user, token: action.payload.token };
    case "LOGOUT":
      return { user: null, token: null };
    default:
      return state;
  }
}

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: null,
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const removeToken = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT" });
    };

    const verifyToken = async () => {
      if (user && token) {
        await axios
          .get(API_URL + `/users/verify`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(() => {
            dispatch({ type: "LOGIN", payload: { user: user, token: token } });
          })
          .catch((err) => {
            removeToken();
            console.log(err);
          });
      } else removeToken();
    };

    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
