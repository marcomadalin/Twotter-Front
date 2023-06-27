import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Twitt from "../components/Twitt";
import SideBar from "../components/SideBar";
import { useAuthContext } from "../hooks/useAuthContext";
import { profileStyles } from "../styles/profileStyles";

export default function Profile() {
  const classes = profileStyles();
  const renderGrid = useMediaQuery("(min-width:850px)");
  const renderContacts = useMediaQuery("(min-width:1300px)");

  const [posts, setPosts] = useState([]);

  const { user, token } = useAuthContext();

  const theme = useTheme();

  const fetchTwitts = async () => {
    await axios
      .get(`http://localhost:4000/twitts/allUser/${user._id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTwitts();
  }, []);

  return (
    <Grid
      container
      className={user ? classes.mainContainer : classes.mainContainerAuth}
      alignItems="flex-start"
      justifyContent="flex-start"
      direction="row"
      sx={{ overflowY: "auto" }}
    >
      <Grid item className={classes.feedGrid}>
        <Box className={classes.tabBox}>
          <Button
            disableRipple
            disableFocusRipple
            className={classes.homeButtonFeed}
          >
            {user.name}
          </Button>
          <p
            style={{ margin: "0 0 0 0" }}
            className={`${classes.secondaryText}`}
          >
            {posts.length + " tweets"}
          </p>
        </Box>
        <Stack className={classes.profileBox}>
          <CardMedia
            component="img"
            height="200"
            image="/static/images/cards/paella.jpg"
            sx={{ backgroundColor: theme.palette.primary.main }}
          />
          <Box className={classes.profileEditBox}>
            <Avatar
              alt={user.username}
              src="/static/images/avatar/1.jpg"
              className={classes.profilePic}
            />
            <Button className={classes.editProfile}>Edit profile</Button>
          </Box>
          <h2 style={{ margin: "0 0 0 0", marginLeft: "20px" }}>{user.name}</h2>
          <p className={`${classes.username} ${classes.secondaryText}`}>
            {"@" + user.username}
          </p>
          <p style={{ marginLeft: "20px", marginRight: "20px" }}>allo?</p>
          <Box className={classes.userInfoBox}></Box>
        </Stack>
        <Box className={classes.feedBox}>
          {posts.map((post, index) => (
            <Twitt key={index} data={post} />
          ))}
        </Box>
      </Grid>
      {renderGrid && (
        <Grid item xs className={classes.contactsGrid}>
          {renderContacts && <SideBar />}
        </Grid>
      )}
    </Grid>
  );
}
