import {
  Avatar,
  Box,
  Button,
  DialogContent,
  Divider,
  Icon,
  IconButton,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { twittDialogStyles } from "../styles/twittDialogStyles";
import { useTwittDialogContext } from "../hooks/useTwittDialogContext";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/Constants";
import { useAuthContext } from "../hooks/useAuthContext";

export default function TwittDialog(props) {
  const classes = twittDialogStyles();

  const { user, token } = useAuthContext();
  const twittDialogContxt = useTwittDialogContext();

  const [dialogTwitt, setDialogTwitt] = useState(false);
  const twittTextRef = useRef("");

  useEffect(() => {
    setDialogTwitt(twittDialogContxt.dialog);
  }, [twittDialogContxt.dialog]);

  const closeDialog = () => {
    twittDialogContxt.dispatch({
      type: "CLOSE",
    });
  };

  const createTwitt = async () => {
    const twitt = {
      text: twittTextRef.current.value,
      user: user._id,
      name: user.name,
      username: user.username,
    };

    await axios
      .post(
        API_URL + `/twitts/new`,
        { data: twitt },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        twittDialogContxt.dispatch({
          type: "UPDATE",
        });
        twittTextRef.current.value = "";
      })
      .catch((err) => console.log(err));
  };

  const sx = {
    "& .MuiDialog-container": {
      alignItems: "flex-start !important",
    },
  };

  return (
    <Dialog open={dialogTwitt} className={classes.authDialog} sx={sx}>
      <IconButton
        color="icon"
        size="small"
        disableRipple
        className={classes.closeButton}
        onClick={() => closeDialog()}
      >
        <Icon>close</Icon>
      </IconButton>
      <DialogContent className={classes.loginModalWrapper}>
        <Box className={classes.loginModalBody}>
          <Box className={classes.twittPost}>
            <Box className={classes.twittWrapper}>
              {user && (
                <Avatar
                  alt={user.username}
                  src={`data:image/png;base64,${user.profile}`}
                />
              )}
              <TextField
                className={classes.twittCreate}
                placeholder="What's going on ?"
                multiline
                minRows={3}
                maxRows={7}
                inputRef={twittTextRef}
              />
            </Box>
            <Divider light className={classes.blurDivider} />
            <Box className={classes.twittButtonsWrapper}>
              <Box className={classes.twittButtons}>
                <IconButton
                  className={classes.iconButtonWrapper}
                  color="primary"
                  size="small"
                  disableRipple
                >
                  <Icon>image</Icon>
                </IconButton>
                <IconButton
                  className={classes.iconButtonWrapper}
                  color="primary"
                  size="small"
                  disableRipple
                >
                  <Icon>gif_box</Icon>
                </IconButton>
                <IconButton
                  className={classes.iconButtonWrapper}
                  color="primary"
                  size="small"
                  disableRipple
                >
                  <Icon>mood</Icon>
                </IconButton>
              </Box>
              <Button
                variant="contained"
                size="small"
                className={classes.twittButton}
                onClick={createTwitt}
              >
                Twitt
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
