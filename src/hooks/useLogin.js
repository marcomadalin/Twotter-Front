import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/Constants";
import { useState } from "react";

export function useLogin() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function login(username, password) {
    setLoading(true);
    await axios
      .post(API_URL + `/users/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        const user = JSON.stringify(response.data.user);
        const token = JSON.stringify(response.data.token);

        localStorage.setItem("user", user);
        localStorage.setItem("token", token);

        dispatch({
          type: "LOGIN",
          payload: { user: response.data.user, token: response.data.token },
        });
        setLoading(false);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return { login, loading };
}
