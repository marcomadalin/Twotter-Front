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
import { useEffect, useRef, useState } from "react";
import { editProfileStyles } from "../styles/editProfileStyles";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

export default function EditProfileModal(props) {
  const classes = editProfileStyles();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");

  const [bio, setBio] = useState("");

  const [location, setLocation] = useState("");

  const [bannerImage, setBannerImage] = useState(null);
  const [bannerImage64, setBannerImage64] = useState("");
  const bannerImageRef = useRef(null);

  const [profileImage, setProfileImage] = useState(null);
  const [profileImage64, setProfileImage64] = useState("");
  const profileImageRef = useRef(null);

  const { user, token, dispatch } = useAuthContext();

  const theme = useTheme();

  useEffect(() => {
    setName(user.name);
    setBio(user.bio);
    setLocation(user.location);
    setProfileImage64(user.profile);
    setBannerImage64(user.banner);
  }, [user, props.openModal]);

  const resetPanel = () => {
    props.closeModal();
  };

  const updateBannerPic = (event) => {
    setBannerImage(event.target.files[0]);

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      setBannerImage64(base64String);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleBannerClick = () => {
    bannerImageRef.current.click();
  };

  const updateProfilePic = (event) => {
    setProfileImage(event.target.files[0]);

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      setProfileImage64(base64String);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleProfileClick = () => {
    profileImageRef.current.click();
  };

  const saveChanges = async () => {
    setLoading(true);
    const formData = new FormData();
    if (bannerImage == null) formData.append("deleteBanner", true);
    formData.append("banner", bannerImage);
    formData.append("profile", profileImage);
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("location", location);

    await axios
      .put(`http://localhost:4000/users/${user._id}`, formData, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (response) => {
        console.log(response.data);

        localStorage.setItem("user", JSON.stringify(response.data));
        await dispatch({
          type: "UPDATE",
          payload: { user: response.data, token: token },
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
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
        <Button
          className={classes.saveProfile}
          onClick={saveChanges}
          disabled={loading}
        >
          {!loading && "Save"}
          {loading && <CircularProgress size="20px" />}
        </Button>
      </Box>
      <Stack>
        <CardMedia
          height="200"
          image={`data:image/png;base64,${bannerImage64}`}
          className={classes.banner}
        >
          <IconButton
            color="icon"
            size="small"
            disableRipple
            className={classes.picEditButton}
            sx={{ marginRight: "10px !important" }}
            onClick={handleBannerClick}
          >
            <input
              type="file"
              accept="image/*"
              ref={bannerImageRef}
              onChange={updateBannerPic}
              hidden
            />
            <Icon>camera</Icon>
          </IconButton>
          <IconButton
            color="icon"
            size="small"
            disableRipple
            className={classes.picEditButton}
            sx={{ marginLeft: "10px !important" }}
            onClick={() => {
              console.log("clicked");
              setBannerImage(null);
              setBannerImage64("");
            }}
          >
            <Icon>close</Icon>
          </IconButton>
        </CardMedia>
        <Box className={classes.profileEditBox}>
          <Avatar
            alt={user.username}
            src={`data:image/png;base64,${profileImage64}`}
            className={classes.profilePic}
          >
            <IconButton
              color="icon"
              size="small"
              disableRipple
              className={classes.picEditButton}
              onClick={handleProfileClick}
              sx={{ zIndex: "1000 !important" }}
            >
              <input
                type="file"
                accept="image/*"
                ref={profileImageRef}
                onChange={updateProfilePic}
                hidden
              />
              <Icon>camera</Icon>
            </IconButton>
          </Avatar>
        </Box>
        <Stack sx={{ padding: "20px 20px 0px 20px" }}>
          <TextField
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
      </Stack>
    </Dialog>
  );
}
