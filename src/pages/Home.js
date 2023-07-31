import {
  Avatar,
  Box,
  Button,
  Icon,
  IconButton,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { homeStyles } from "../styles/homeStyles";
import Grid from "@mui/material/Grid";
import { useEffect, useRef, useState } from "react";
import Twitt from "../components/Twitt";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { API_URL } from "../utils/Constants";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const classes = homeStyles();

  const [activeTab, setActiveTab] = useState(0);
  const twittTextRef = useRef("");

  const [posts, setPosts] = useState([]);
  const [followingPosts, setFollowingPosts] = useState([]);

  const { user, token } = useAuthContext();

  const navigate = useNavigate();

  const fetchTwitts = async () => {
    await axios
      .get(API_URL + `/twitts/all`, {})
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchFollowingTwitts = async () => {
    await axios
      .get(API_URL + `/twitts/allFollowing`, {
        params: {
          following: user.following,
        },
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setFollowingPosts(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user !== null) {
      fetchTwitts();
      fetchFollowingTwitts();
    }
  }, [user]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const createTwitt = async () => {
    const twitt = {
      text: twittTextRef.current.value,
      mentionId: null,
      comments: [],
      retwitts: 0,
      likes: 0,
      user: user._id,
      name: user.name,
      username: user.username,
    };

    await axios
      .post(API_URL + `/twitts/new`, twitt, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        response.data.image = user.profile;
        setPosts((oldPosts) => [response.data].concat(oldPosts));
        twittTextRef.current.value = "";
      })
      .catch((err) => console.log(err));
  };

  function a11yProps(index) {
    return {
      id: `feed-tab-${index}`,
      "aria-controls": `feed-tabpanel-${index}`,
    };
  }

  return (
    <>
      {user && (
        <Grid item className={classes.feedGrid}>
          <Box className={classes.tabBox}>
            <Button
              disableRipple
              disableFocusRipple
              className={classes.homeButtonFeed}
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Button>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="primary"
              aria-label="feed tabs"
              variant="fullWidth"
            >
              <Tab
                label="For you"
                className={classes.feedTab}
                {...a11yProps(0)}
              />
              <Tab
                label="Following"
                className={classes.feedTab}
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
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
                minRows={1}
                maxRows={7}
                inputRef={twittTextRef}
              />
            </Box>
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
          <Box className={classes.moreTwitts}>
            <Button disableRipple size="large" className={classes.loadTwitts}>
              Show 56 Tweets
            </Button>
          </Box>
          {activeTab === 0 && (
            <Box className={classes.feedBox}>
              {posts.map((post, index) => (
                <Twitt key={index} data={post} image={post.image} />
              ))}
            </Box>
          )}
          {activeTab === 1 && (
            <Box className={classes.feedBox}>
              {followingPosts.map((post, index) => (
                <Twitt key={index} data={post} image={post.image} />
              ))}
            </Box>
          )}
        </Grid>
      )}
    </>
  );
}
