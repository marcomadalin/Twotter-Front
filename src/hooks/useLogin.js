import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/Constants";

export function useLogin() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  async function login(username, password) {
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
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  return { login };
}
