import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Twitt from "../components/Twitt";
import { exploreStyles } from "../styles/exploreStyles";
import { API_URL } from "../utils/Constants";

export default function Explore() {
  const classes = exploreStyles();

  const [posts, setPosts] = useState([]);

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
    <Grid item className={classes.feedGrid}>
      <Box className={classes.tabBox}>
        <Button
          disableRipple
          disableFocusRipple
          className={classes.homeButtonFeed}
          onClick={() => window.scrollTo(0, 0)}
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
  );
}
