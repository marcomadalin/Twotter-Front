import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

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

  const verifyToken = async () => {
    await axios
      .get("http://localhost:4000/users/verify", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  useEffect(() => {
    if (user && token && verifyToken(token)) {
      dispatch({ type: "LOGIN", payload: { user: user, token: token } });
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
