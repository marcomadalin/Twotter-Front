import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/Constants";
import { useState } from "react";

export function useLogin() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function login(username, password) {
    setLoading(true);
    setError("");
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
        setError("");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
        setLoading(false);
      });
  }

  return { login, loading, error };
}
