import {
  Avatar,
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Icon,
  IconButton,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState } from "react";
import { editProfileStyles } from "../styles/editProfileStyles";
import { useAuthContext } from "../hooks/useAuthContext";

export default function EditProfileModal(props) {
  const classes = editProfileStyles();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");

  const [bio, setBio] = useState("");

  const [location, setLocation] = useState("");

  const { user } = useAuthContext();

  const theme = useTheme();

  useEffect(() => {
    setName(user.name);
    setBio(user.bio);
    setLocation(user.location);
  }, [user, props.openModal]);

  const resetPanel = () => {
    props.closeModal();
  };

  return (
    <Dialog open={props.openModal} className={classes.authDialog}>
      <Box className={classes.tabBox}>
        <Box className={classes.editCloseWrapper}>
          <IconButton
            color="icon"
            size="small"
            disableRipple
            className={classes.closeButton}
            onClick={resetPanel}
          >
            <Icon>close</Icon>
          </IconButton>
          <h4>Edit profile</h4>
        </Box>
        <Button className={classes.saveProfile} onClick={() => {}}>
          Save
        </Button>
      </Box>
      <Stack>
        <CardMedia
          height="200"
          image="/static/images/cards/paella.jpg"
          className={classes.banner}
        >
          <IconButton
            color="icon"
            size="small"
            disableRipple
            className={classes.picEditButton}
            sx={{ marginRight: "10px !important" }}
          >
            <Icon>camera</Icon>
          </IconButton>
          <IconButton
            color="icon"
            size="small"
            disableRipple
            className={classes.picEditButton}
            sx={{ marginLeft: "10px !important" }}
          >
            <Icon>close</Icon>
          </IconButton>
        </CardMedia>
        <Box className={classes.profileEditBox}>
          <Avatar
            alt={user.username}
            src="/static/images/avatar/1.jpg"
            className={classes.profilePic}
          >
            <IconButton
              color="icon"
              size="small"
              disableRipple
              className={classes.picEditButton}
            >
              <Icon>camera</Icon>
            </IconButton>
          </Avatar>
        </Box>
        <Stack sx={{ padding: "20px 20px 0px 20px" }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            error={name.length > 50}
            onChange={(event) => {
              if (event.target.value.length <= 50) {
                setName(event.target.value);
              }
            }}
            inputProps={{
              maxLength: 50,
            }}
            className={classes.outlineInput}
          />
          <TextField
            id="outlined-basic"
            label="Bio"
            variant="outlined"
            multiline
            minRows={3}
            maxRows={3}
            value={bio}
            onChange={(event) => {
              if (event.target.value.length <= 160) {
                setBio(event.target.value);
              }
            }}
            inputProps={{
              maxLength: 160,
            }}
            className={classes.outlineInput}
          />
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            value={location}
            onChange={(event) => {
              if (event.target.value.length <= 50) {
                setLocation(event.target.value);
              }
            }}
            inputProps={{
              maxLength: 50,
            }}
            className={classes.outlineInput}
          />
        </Stack>
        {loading && (
          <Box className={classes.loadingBox}>
            <CircularProgress />
          </Box>
        )}
      </Stack>
    </Dialog>
  );
}
