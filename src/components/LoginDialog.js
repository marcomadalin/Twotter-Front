import {
  Box,
  Button,
  CircularProgress,
  DialogContent,
  DialogTitle,
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { loginDialogStyles } from "../styles/loginDialogStyles";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLogin } from "../hooks/useLogin";

export default function LoginDialog(props) {
  const classes = loginDialogStyles();

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const resetPanel = () => {
    props.closeLoginModal();
    setTimeout(() => {
      setUsername("");
      setPassword("");
    }, 200);
  };

  return (
    <Dialog open={props.openLogin} className={classes.authDialog}>
      <IconButton
        color="icon"
        size="small"
        disableRipple
        className={classes.closeButton}
        onClick={resetPanel}
      >
        <Icon>close</Icon>
      </IconButton>
      <DialogTitle className={classes.dialogHeader}>
        <Icon>cruelty_free</Icon>
      </DialogTitle>
      <DialogContent className={classes.loginModalWrapper}>
        <Box className={classes.loginModalBody}>
          {!loading && (
            <Box className={classes.loginButtonsWrapper}>
              <h1
                style={{
                  fontSize: "28px",
                  marginLeft: "-50px",
                  marginBottom: "40px",
                }}
              >
                Log in on Twotter
              </h1>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                className={`${classes.loginUsername} ${classes.outlineInput}`}
              />
              <FormControl className={classes.passwordField}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  className={classes.outlineInput}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        className={classes.icon}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Box className={classes.forgotPassWrapper}>
                <Button
                  disableRipple
                  className={classes.signupText}
                  sx={{ marginTop: "-20px !important" }}
                >
                  <span>Forgot password ?</span>
                </Button>
              </Box>
            </Box>
          )}
          {loading && (
            <Box className={classes.loadingBox}>
              <CircularProgress />
            </Box>
          )}
          {!loading && (
            <Stack>
              <Box className={classes.loginButtonBox}>
                <Button
                  disableRipple
                  className={classes.loginButtonBig}
                  disabled={username === "" || password === ""}
                  onClick={() => login(username, password)}
                >
                  <span>Log in</span>
                </Button>
                <p className={classes.loginText}>
                  Don't have an account?
                  <Button
                    disableRipple
                    className={classes.signupText}
                    onClick={props.openSignupModal}
                  >
                    <span>Sign up</span>
                  </Button>
                </p>
              </Box>
            </Stack>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
