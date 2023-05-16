import {
  Box,
  Button,
  CircularProgress,
  DialogContent,
  DialogTitle,
  Divider,
  Icon,
  IconButton,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { signupDialogStyles } from "../styles/signupDialogStyles";

export default function SignupDialog(props) {
  const classes = signupDialogStyles();

  const [buttonsPanel, setButtonsPanel] = useState(true);

  const [loading, setLoading] = useState(false);

  const [signupDisabled, setSignupDisabled] = useState(true);

  const changePanel = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Dialog open={props.openSignup} className={classes.authDialog}>
      <IconButton
        color="icon"
        size="small"
        disableRipple
        className={classes.closeButton}
        onClick={props.closeSignupModal}
      >
        <Icon>close</Icon>
      </IconButton>
      <DialogTitle className={classes.dialogHeader}>
        <Icon>cruelty_free</Icon>
      </DialogTitle>
      <DialogContent className={classes.signupModalWrapper}>
        <Box className={classes.signupModalBody}>
          {buttonsPanel && (
            <Box className={classes.signupButtonsWrapper}>
              <h1
                style={{
                  fontSize: "28px",
                  marginLeft: "-50px",
                  marginBottom: "40px",
                }}
              >
                Sing up on Twitter
              </h1>
              <Button className={classes.signupButtons}>
                <Icon className={classes.signupButtonIcon}>public</Icon>
                Sing up with Google
              </Button>
              <Button className={classes.signupButtons}>
                <Icon className={classes.signupButtonIcon}>phone_iphone</Icon>
                Sing up with Apple
              </Button>
              <Box className={classes.dividerWrapper}>
                <Divider light className={classes.divider} />
                <p style={{ margin: "0 10px 0 10px" }}>Or</p>
                <Divider light className={classes.divider} />
              </Box>
              <Button className={classes.signupButtons}>
                Create an account
              </Button>
              <p className={classes.termsText} style={{ marginTop: "-10px" }}>
                By signing up, you agree to the{" "}
                <Button disableRipple className={classes.blueTermsText}>
                  <span>Terms of Service</span>
                </Button>{" "}
                and{" "}
                <Button disableRipple className={classes.blueTermsText}>
                  <span>Privacy Policy</span>
                </Button>
                , including the{" "}
                <Button disableRipple className={classes.blueTermsText}>
                  <span>Cookie Policy</span>
                </Button>
                .
              </p>
            </Box>
          )}
          {loading && (
            <Box className={classes.loadingBox}>
              <CircularProgress />
            </Box>
          )}
          {!loading && (
            <p className={classes.signupText}>
              Already have an account?
              <Button
                disableRipple
                className={classes.blueText}
                onClick={props.openLoginModal}
              >
                <span>Log in</span>
              </Button>
            </p>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
