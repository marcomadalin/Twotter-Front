import {
  Avatar,
  Box,
  Button,
  CardMedia,
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
import Twitt from "./Twitt";

export default function TwittDialog({ twitt = null }) {
  const classes = twittDialogStyles();

  const { user, token } = useAuthContext();
  const twittDialogContxt = useTwittDialogContext();

  const [dialogTwitt, setDialogTwitt] = useState(false);
  const twittTextRef = useRef("");

  const [image, setImage] = useState(null);
  const [image64, setImage64] = useState("");
  const imageRef = useRef(null);

  const [responseTwitt, setResponseTwitt] = useState(null);

  useEffect(() => {
    setDialogTwitt(twittDialogContxt.dialog);
  }, [twittDialogContxt.dialog]);

  useEffect(() => {
    setResponseTwitt(twittDialogContxt.response);
  }, [twittDialogContxt.response]);

  const updateTwittImage = (event) => {
    setImage(event.target.files[0]);

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      setImage64(base64String);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleImageChange = () => {
    imageRef.current.click();
  };

  const closeDialog = () => {
    twittDialogContxt.dispatch({
      type: "CLOSE",
    });
  };

  const createTwitt = async () => {
    const formData = new FormData();
    formData.append("text", twittTextRef.current.value);
    formData.append("fatherId", responseTwitt._id);
    formData.append("user", user._id);
    formData.append("name", user.name);
    formData.append("username", user.username);
    formData.append("img", image);
    formData.append(
      "comments",
      responseTwitt._id !== null
        ? JSON.stringify(responseTwitt.commentedBy)
        : null
    );
    formData.append("hasImage", image64 !== "");

    await axios
      .post(API_URL + `/twitts/new`, formData, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        twittDialogContxt.dispatch({
          type: "UPDATE",
        });
        twittTextRef.current.value = "";
        setImage(null);
        setImage64("");
        imageRef.current.value = "";
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
          {responseTwitt !== null && (
            <Twitt
              data={responseTwitt}
              image={responseTwitt.image}
              response={true}
            />
          )}
          <Box className={classes.twittPost}>
            <Box className={classes.twittWrapper}>
              {user && (
                <Avatar
                  alt={user.username}
                  src={`data:image/png;base64,${user.profile}`}
                />
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100% !important",
                }}
              >
                {responseTwitt !== null && (
                  <Box
                    sx={{
                      display: "flex",
                      paddingLeft: "10px",
                    }}
                  >
                    <span className={classes.retwittText2}>Responding to</span>
                    <span className={classes.userComment}>
                      {" @" + responseTwitt.username}
                    </span>
                  </Box>
                )}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {image64 !== "" && (
                    <CardMedia
                      height="150"
                      image={`data:image/png;base64,${image64}`}
                      className={classes.banner}
                    >
                      <IconButton
                        color="icon"
                        size="small"
                        disableRipple
                        className={classes.picEditButton}
                        sx={{ marginLeft: "10px !important" }}
                        onClick={() => {
                          setImage(null);
                          setImage64("");
                          imageRef.current.value = "";
                        }}
                      >
                        <Icon>close</Icon>
                      </IconButton>
                    </CardMedia>
                  )}
                  <TextField
                    className={classes.twittCreate}
                    placeholder="What's going on ?"
                    multiline
                    minRows={1}
                    maxRows={7}
                    inputRef={twittTextRef}
                  />
                </Box>
              </Box>
            </Box>
            <Divider light className={classes.blurDivider} />
            <Box className={classes.twittButtonsWrapper}>
              <Box className={classes.twittButtons}>
                <IconButton
                  className={classes.iconButtonWrapper}
                  color="primary"
                  size="small"
                  disableRipple
                  onClick={handleImageChange}
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={imageRef}
                    onChange={updateTwittImage}
                    hidden
                  />
                  <Icon>image</Icon>
                </IconButton>
                {/*<IconButton
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
              </IconButton>*/}
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
