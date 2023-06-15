import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export function useLogin() {
  const { dispatch } = useAuthContext();
  async function login(username, password) {
    await axios
      .post("http://localhost:4000/users/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        const user = JSON.stringify(response.data.user);
        const token = JSON.stringify(response.data.token);

        localStorage.setItem("user", user);
        localStorage.setItem("token", token);

        dispatch({ type: "LOGIN", payload: { user: user, token: token } });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  return { login };
}
