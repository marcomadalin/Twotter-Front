import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  Icon,
  IconButton,
  Stack,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { slowServiceDialogStyles } from "../styles/SlowServiceDialogStyles";

export default function SlowServiceInfoDialog(props) {
  const classes = slowServiceDialogStyles();

  return (
    <Dialog open={props.dialog} className={classes.authDialog}>
      <IconButton
        color="icon"
        size="small"
        disableRipple
        className={classes.closeButton}
        onClick={() => props.closeDialog()}
      >
        <Icon>close</Icon>
      </IconButton>
      <DialogTitle className={classes.dialogHeader}>
        <Icon>cruelty_free</Icon>
      </DialogTitle>
      <DialogContent className={classes.loginModalWrapper}>
        <Box className={classes.loginModalBody}>
          <Box className={classes.loginButtonsWrapper}>
            <h1
              style={{
                fontSize: "28px",
                marginBottom: "40px",
              }}
            >
              Welcome to Twotter
            </h1>
            <p>
              Thanks for checking out the web. Sorry if you feel the web loads
              data kinda slow the first time, as it takes about 20-30 seconds
              due to not having much traffic in a while.
            </p>
            <p>
              The free tier from the hosting service does not allow for much
              more :/
            </p>
          </Box>
          <Stack>
            <Box className={classes.loginButtonBox}>
              <Button
                disableRipple
                className={classes.loginButtonBig}
                onClick={() => props.closeDialog()}
              >
                <span>Ok</span>
              </Button>
            </Box>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
