import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Icon,
  IconButton,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { bannerStyles } from "../styles/bannerStyles";

export default function AuthenticationBanners() {
  const classes = bannerStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openLoginModal = () => {
    setOpenLogin(true);
  };

  const closeLoginModal = () => {
    setOpenLogin(false);
  };

  const openSignupModal = () => {
    setOpenSignup(true);
  };

  const closeSignupModal = () => {
    setOpenSignup(false);
  };

  return (
    <Box className={classes.banners}>
      <Box className={classes.auth}>
        <Box>
          <h2 className={classes.h2}>Stay up to date with what's going on</h2>
          <p className={classes.p}>
            Twitter users are always the first ones to know.
          </p>
        </Box>
        <Box className={classes.buttons}>
          <Button className={classes.login} onClick={openLoginModal}>
            Login
          </Button>
          <Dialog open={openLogin} className={classes.authDialog}>
            <IconButton
              color="icon"
              size="small"
              disableRipple
              className={classes.closeButton}
              onClick={closeLoginModal}
            >
              <Icon>close</Icon>
            </IconButton>
            <DialogTitle className={classes.dialogHeader}>
              <Icon>cruelty_free</Icon>
            </DialogTitle>
            <DialogContent className={classes.loginModalWrapper}>
              <Box className={classes.loginModalBody}>
                <h1 style={{ marginLeft: "10px" }}>Log in on Twitter</h1>
                <Box className={classes.loginButtonsWrapper}>
                  <Button className={classes.loginButtons}>
                    <Icon className={classes.loginButtonIcon}>public</Icon>
                    Log in with Google
                  </Button>
                  <Button className={classes.loginButtons}>
                    <Icon className={classes.loginButtonIcon}>
                      phone_iphone
                    </Icon>
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
                  <Button className={classes.loginButtons}>Next</Button>
                  <Button className={classes.forgotPassword}>
                    Forgot password?
                  </Button>
                </Box>
                <p className={classes.loginText}>
                  Don't have an account?
                  <Button disableRipple className={classes.signupText}>
                    <span>Sign up</span>{" "}
                  </Button>
                </p>
              </Box>
            </DialogContent>
          </Dialog>
          <Button className={classes.signup} onClick={openSignupModal}>
            Signup
          </Button>
          <Dialog open={openSignup} className={classes.authDialog}>
            <DialogTitle>Signup</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={closeSignupModal}>Cancel</Button>
              <Button onClick={closeSignupModal}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
      <Box className={classes.coockies}>
        <Box>
          <h4 className={classes.coockieHeader}>Did someone say… cookies?</h4>
          <p className={classes.coockieText}>
            Twitter and its partners use cookies to provide you with a better,
            safer and faster service and to support our business. Some cookies
            are necessary to use our services, improve them and make sure they
            work properly.
          </p>
        </Box>
        <Box className={classes.buttonsCoockie}>
          <Button className={classes.coockieButton}>Accept coockies</Button>
          <Button className={classes.coockieButton} sx={{ mt: 1 }}>
            Reject coockies
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
