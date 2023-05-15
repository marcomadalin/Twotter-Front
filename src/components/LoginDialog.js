import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  Icon,
  IconButton,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { loginDialogStyles } from "../styles/loginDialogStyles";
import { useState } from "react";

export default function LoginDialog(props) {
  const classes = loginDialogStyles();

  const [usernamePanel, setUsernamePanel] = useState(true);

  const changePanel = () => {
    setUsernamePanel(false);
  };

  const resetPanel = () => {
    props.closeLoginModal();
    setTimeout(() => {
      setUsernamePanel(true);
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
          {usernamePanel && (
            <Box className={classes.loginButtonsWrapper}>
              <h1 style={{ fontSize: "28px", marginLeft: "-40px" }}>
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
                label="Phone number, email or username"
                variant="outlined"
                className={classes.loginUsername}
              />
              <Button className={classes.loginButtons} onClick={changePanel}>
                Next
              </Button>
              <Button className={classes.forgotPassword}>
                Forgot password?
              </Button>
            </Box>
          )}
          {!usernamePanel && (
            <Box className={classes.loginButtonsWrapper}>
              <h1 style={{ fontSize: "28px", marginLeft: "-20px" }}>
                Enter your password
              </h1>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className={classes.loginUsername}
              />
              <Button
                disableRipple
                className={classes.signupText}
                sx={{ marginTop: "-20px !important" }}
              >
                <span>Forgot password ?</span>
              </Button>
            </Box>
          )}
          <p className={classes.loginText}>
            Don't have an account?
            <Button disableRipple className={classes.signupText}>
              <span>Sign up</span>
            </Button>
          </p>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
