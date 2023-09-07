import {
  Avatar,
  Box,
  Button,
  CardMedia,
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
import { useTwittDialogContext } from "../hooks/useTwittDialogContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const classes = homeStyles();

  const [activeTab, setActiveTab] = useState(0);
  const twittTextRef = useRef("");

  const [posts, setPosts] = useState([]);
  const [followingPosts, setFollowingPosts] = useState([]);

  const [image, setImage] = useState(null);
  const [image64, setImage64] = useState("");
  const imageRef = useRef(null);

  const { user, token } = useAuthContext();
  const twittDialogContext = useTwittDialogContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      fetchTwitts();
      fetchFollowingTwitts();
    } else navigate("/explore");
  }, [token, twittDialogContext.key]);

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

  const fetchTwitts = async () => {
    await axios
      .get(API_URL + `/twitts/all`, {})
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchFollowingTwitts = async () => {
    if (user.following.length > 0) {
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
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const createTwitt = async () => {
    const formData = new FormData();
    formData.append("text", twittTextRef.current.value);
    formData.append("user", user._id);
    formData.append("name", user.name);
    formData.append("fatherId", null);
    formData.append("username", user.username);
    formData.append("img", image);
    formData.append("comments", null);
    formData.append("hasImage", image64 !== "");

    await axios
      .post(API_URL + `/twitts/new`, formData, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        response.data.twitt.image = user.profile;
        setPosts((oldPosts) => [response.data.twitt].concat(oldPosts));
        twittTextRef.current.value = "";
        setImage(null);
        setImage64("");
        imageRef.current.value = "";
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
    <Grid item className={classes.feedGrid}>
      {user && (
        <>
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
              <Box
                sx={{ width: "100%", display: "flex", flexDirection: "column" }}
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
                {/*
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
              */}
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
          {/*
          <Box className={classes.moreTwitts}>
            <Button disableRipple size="large" className={classes.loadTwitts}>
              Show 56 Tweets
            </Button>
          </Box>
          */}
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
        </>
      )}
    </Grid>
  );
}
