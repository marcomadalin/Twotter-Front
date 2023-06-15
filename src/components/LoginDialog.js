import {
  Box,
  Button,
  CircularProgress,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { loginDialogStyles } from "../styles/loginDialogStyles";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLogin } from "../hooks/useLogin";

export default function LoginDialog(props) {
  const classes = loginDialogStyles();

  const [usernamePanel, setUsernamePanel] = useState(true);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const { login } = useLogin();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePanel = () => {
    setUsernamePanel(false);
  };

  const resetPanel = () => {
    props.closeLoginModal();
    setTimeout(() => {
      setUsernamePanel(true);
      setUsername("");
      setPassword("");
    }, 200);
  };

  const loginUser = async () => {
    setLoading(true);
    await login(username, password)
      .then(() => {
        setLoading(false);
        resetPanel();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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
          {usernamePanel && !loading && (
            <Box className={classes.loginButtonsWrapper}>
              <h1
                style={{
                  fontSize: "28px",
                  marginLeft: "-50px",
                  marginBottom: "40px",
                }}
              >
                Log in on Twitter
              </h1>
              <Button className={classes.loginButtons}>
                <Icon className={classes.loginButtonIcon}>public</Icon>
                Log in with Google
              </Button>
              <Button className={classes.loginButtons}>
                <Icon className={classes.loginButtonIcon}>phone_iphone</Icon>
                Log in with Apple
              </Button>
              <Box className={classes.dividerWrapper}>
                <Divider light className={classes.divider} />
                <p style={{ margin: "0 10px 0 10px" }}>Or</p>
                <Divider light className={classes.divider} />
              </Box>
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
              <Button className={classes.loginButtons} onClick={changePanel}>
                Next
              </Button>
              <Button className={classes.forgotPassword}>
                Forgot password?
              </Button>
            </Box>
          )}
          {loading && (
            <Box className={classes.loadingBox}>
              <CircularProgress />
            </Box>
          )}
          {!usernamePanel && !loading && (
            <Box className={classes.passWordLoginWrapper}>
              <h1 style={{ fontSize: "28px", marginLeft: "-20px" }}>
                Enter your password
              </h1>

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
              <Box className={classes.loginButtonBox}>
                <Button
                  disableRipple
                  className={classes.loginButtonBig}
                  disabled={username === "" || password === ""}
                  onClick={loginUser}
                >
                  <span>Log in</span>
                </Button>
              </Box>
            </Box>
          )}
          {!loading && (
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
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
