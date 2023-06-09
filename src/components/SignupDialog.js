import {
  Box,
  Button,
  CircularProgress,
  DialogContent,
  DialogTitle,
  Icon,
  IconButton,
  Stack,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { signupDialogStyles } from "../styles/signupDialogStyles";

export default function SignupDialog(props) {
  const classes = signupDialogStyles();

  const [buttonsPanel, setButtonsPanel] = useState(true);

  const [loading, setLoading] = useState(false);

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
                Sing up on Twotter
              </h1>
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
            <Stack>
              <Button
                className={classes.signupButtons}
                onClick={props.openFormSignup}
              >
                Create an account
              </Button>
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
            </Stack>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
