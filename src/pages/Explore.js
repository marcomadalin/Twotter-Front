import { Box, Button, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Twitt from "../components/Twitt";
import SideBar from "../components/SideBar";
import { exploreStyles } from "../styles/exploreStyles";
import { useAuthContext } from "../hooks/useAuthContext";
import { API_URL } from "../utils/Constants";

export default function Explore() {
  const classes = exploreStyles();
  const renderGrid = useMediaQuery("(min-width:850px)");
  const renderContacts = useMediaQuery("(min-width:1300px)");

  const [posts, setPosts] = useState([]);

  const { user } = useAuthContext();

  const fetchTwitts = async () => {
    await axios
      .get(API_URL + `/twitts/all`)
      .then((response) => {
        setPosts(response.data);
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
            Explore
          </Button>
        </Box>
        <Box className={classes.feedBox}>
          {posts.map((post, index) => (
            <Twitt key={index} data={post} image={post.image} />
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
