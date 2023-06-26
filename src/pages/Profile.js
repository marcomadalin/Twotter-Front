import { Box, Button, useMediaQuery } from "@mui/material";
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
        </Box>
        <Box className={classes.profileBox}></Box>
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
